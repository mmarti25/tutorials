const path = require("path");
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function selectChangedFiles() {
    let pr = process.env.PR_NUMBER;
    let arr = [];
    try {
        let get = await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}/files', {
            owner: 'devonfw-tutorials',
            repo: 'tutorials',
            pull_number: pr
        });
        let files = get.data;
        files.forEach(file => {
            arr.push(file.filename)
        });
    } catch(e) {
        throw e;
    }
    return arr;
}

selectChangedFiles().catch(err => {
    console.log(err);
    process.exit(1); 
});

