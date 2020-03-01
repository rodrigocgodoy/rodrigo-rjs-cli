module.exports = {
  name: 'generate:component',
  alias: ['gc'],
  description: 'Create new component inside src/components',
  run: async toolbox => {
    const {
      parameters,
      createComponent,
    } = toolbox

    const name = parameters.first;

    await createComponent('src/components', name)
  }
}
