import { message, warn, fail, danger, schedule } from 'danger'

const newFiles = danger.git.created_files.join('- ');

message('New Files in this PR: \n - ' + newFiles);

const packageChanged = danger.git.modified_files.includes('package.json');
const lockfileChanged = danger.git.modified_files.includes('package-lock.json');

if (packageChanged && !lockfileChanged) {
    const message = 'Changes were made to package.json, but not to package-lock.lock'
    const idea = 'Perhaps you need to run `npm install`?'
    warn(`${message} - <i>${idea}</i>`)
  }


const bigPRThreshold = 900;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn('Big pull request, please keep small to make it easier to review');
}

danger.git.commits.forEach(commit => {
    if (!commit.message.match(/^(feat:)|(fix:)|(major:)|(chore:)|(update:)|(bump:)/g)) {
        fail(`Commit message '${commit.message}' doesn't match the correct format`);
    }
})

const createdJSFiles = danger.git.created_files.filter(
  (file) => file.match(/\.jsx?$/) && !file.match(/webpack/),
)
  
if (createdJSFiles.length) {
  fail(`A new .js file was added, please convert to .tsx or .ts and try again`)
}
  