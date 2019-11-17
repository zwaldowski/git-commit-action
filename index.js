const core = require('@actions/core')
const { exec } = require('@actions/exec')

async function run() {
  try {
    const workingDirectory = core.getInput('working_directory')
    const commitMessage = core.getInput('commit_message')
    const authorName = core.getInput('author_name')
    const authorEmail = core.getInput('author_email')
    var sha = ''
    
    await exec('git', [ '-C', workingDirectory, 'init' ])
    await exec('git', [ '-C', workingDirectory, 'add', '-A' ])
    await exec('git', [ '-C', workingDirectory, 'config', '--local', 'user.name', authorName ])
    await exec('git', [ '-C', workingDirectory, 'config', '--local', 'user.email', authorEmail ])
    await exec('git', [ '-C', workingDirectory, 'commit', '--no-verify', '-m', commitMessage ])
    await exec('git', [ '-C', workingDirectory, 'rev-parse', 'HEAD' ], { listeners: { stdout: buffer => sha += buffer.toString() }})
    
    core.setOutput('sha', sha)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
