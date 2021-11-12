const { readFileSync, writeFileSync } = require('fs');
const importFrom = require('import-from');
const path = require('path');
const CWD = process.cwd();

const { getPackages } = importFrom(CWD, '@lerna/project');
const { QueryGraph } = importFrom(CWD, '@lerna/query-graph');
const globIgnore = require('glob-gitignore');
const ignore = require('ignore');
const execa = require('execa');
const commonPrefix = require('common-prefix');

const tsconfig = JSON.parse(readFileSync(path.join(CWD, './tsconfig.json')));

const buildIgnore = () => {
    let rules = '';

    try {
        rules = readFileSync(path.join(CWD, '.buildignore')).toString();
    } catch (e) {
        if (e.code !== 'ENOENT') {
            throw 'No .buildignore file';
        }
    }

    return ignore().add(rules);
};

const splitIterations = async (graph) => {
    let readyPackages = await graph.getAvailablePackages();
    const iterations = [];

    while (readyPackages.length > 0) {
        iterations.push(readyPackages);

        // Mark these packages as complete on the graph
        readyPackages.forEach((_package) => graph.markAsDone(_package));
        readyPackages = await graph.getAvailablePackages();
    }

    return iterations;
};

const calcIncludes = (location, reg = 'src/**/*.{ts,tsx}') =>
    globIgnore.glob([path.relative(CWD, path.join(location, reg))], {
        cwd: CWD,
        ignore: buildIgnore(),
    });

const cleanPackages = (locations) =>
    Promise.all([
        ...locations.map((location) =>
            execa.command(`rm -rf ${path.join(location, './dist')}`, {
                stdio: 'inherit',
            })
        ),
        execa.command(`rm -rf ${path.join(CWD, './dist')}`, {
            stdio: 'inherit',
        }),
    ]);

const copyBuiltFiles = async (location) => {
    const includes = await calcIncludes(location);

    if (includes.length === 0) {
        return;
    }
    const paths = includes.map((include) => path.parse(include).dir);
    const fromRelative = commonPrefix(paths);
    const from = path.join(CWD, './dist', fromRelative);
    const to = path.join(location, './dist');

    const filename = includes[0].slice(includes[0].lastIndexOf('/') + 1);

    console.log(`Successfully built package '${filename}' `);

    return await execa.command(`cp -r ${from} ${to}`, { stdio: 'inherit' });
};

const buildIteration = async (iteration, n) => {
    const locations = iteration.map((_package) => _package.location);

    const filename = `tsconfig.json.${n}`;
    const iterationTsconfig = {
        ...tsconfig,
        compilerOptions: {
            ...tsconfig.compilerOptions,
            rootDir: CWD,
        },
        include: (
            await Promise.all(
                locations.map((location) => calcIncludes(location))
            )
        ).reduce((acc, arr) => acc.concat(arr), []),
    };

    writeFileSync(
        path.join(CWD, filename),
        JSON.stringify(iterationTsconfig, null, 4)
    );

    await execa.command(`npx tsc --project ${filename}`, {
        stdio: 'inherit',
    });

    for (const location of locations) {
        await copyBuiltFiles(location);
    }

    await execa.command(`rm -rf ${filename}`, { stdio: 'inherit' });
};

const build = async () => {
    const packages = await getPackages();
    const graph = new QueryGraph(packages, {
        graphType: 'allDependencies',
        rejectCycles: false,
    });

    const locations = packages.map((_package) => _package.location);

    const iterations = await splitIterations(graph);

    await cleanPackages(locations);

    for (let i = 0; i < iterations.length; i++) {
        await buildIteration(iterations[i], i);
    }
};

build().catch((e) => {
    console.error(`Build failed: ${String(e)}, try again`);
    process.exit(1);
});
