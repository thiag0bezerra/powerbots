const greetA = require('@powerbots/example-a')

module.exports = function greetB(name) {
  return `example-b -> ${greetA(name)}`
}
