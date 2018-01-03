const getData = require("../mongo")

const sayHello = () => {
  const coders = getData()
  const helloStr = coders.reduce((carry, coder) => {
    carry += `${coder.name},`
    return carry
  }, "Hi, ")
  return helloStr
}

module.exports = sayHello