const { spawn } = require('child_process');
const { serve } = require('bun');

const SECRET_KEY = ''; // 替换为你的特定密钥
const REPO_PATH = ''; // 替换为你的文件夹路径
const BRANCH_NAME = 'gh-pages'; // 替换为你的分支名称

function executeGitCommand(args) {
    return new Promise((resolve, reject) => {
        const git = spawn('git', args, { cwd: REPO_PATH });

        git.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        git.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        git.on('close', (code) => {
            if (code === 0) {
                resolve('Git command completed successfully.');
            } else {
                reject(`Git command failed with code ${code}.`);
            }
        });
    });
}

async function updateRepository() {
    // Add the directory to the safe list
  await executeGitCommand(['config', '--global', '--add', 'safe.directory', REPO_PATH]);
    // Fetch with depth to only get the latest commit
    await executeGitCommand(['fetch', '--depth', '1']);
    // Reset to the latest commit
    await executeGitCommand(['reset', '--hard', `origin/${BRANCH_NAME}`]);
    // Clean up unnecessary files and optimize the repository
    await executeGitCommand(['gc', '--prune=now', '--aggressive']);
}

serve({
    async fetch(req) {
        const url = new URL(req.url);
        const key = url.searchParams.get('key');

        if (key === SECRET_KEY) {
            try {
                await updateRepository();
                return new Response('Repository updated successfully.', { status: 200 });
            } catch (error) {
                return new Response(error, { status: 500 });
            }
        } else {
            return new Response('Unauthorized', { status: 401 });
        }
    },
    port: 41111, // 可以根据需要更改端口
});

console.log('Server is running on http://localhost:');
