
const command = {
  name: 'my-cli-generate',
  run: async toolbox => {
    const { print } = toolbox

    print.success(`Welcome to my CLI, run "my-cli-generate -h" for more information`)
  }
}

module.exports = command
