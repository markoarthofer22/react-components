import { message, danger, warn } from 'danger';

const newFiles = danger.git.created_files.join('- ');

message('New Files in this PR: \n - ' + newFiles);

const packageChanged = danger.git.modified_files.includes('package.json');
const lockfileChanged = danger.git.modified_files.includes('package-lock.json');


if (packageChanged && !lockfileChanged) {
    warn(`Changes were made to package.json, but not to package-lock.json - <i>'Perhaps you need to run ${String(`npm install`)}?'</i>`);
}

const bigPRThreshold = 600;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn('Big pull request, please keep small to make it easier to review');
}

danger.git.commits.forEach(commit => {
    if (!commit.message.match(/^(feat:)|(fix:)|(major:)|(chore:)|(update:)/g)) {
        fail(`Commit message '${commit.message}' doesn't match the correct format`);
    }
})