const getData = require("../mongo")

const sayHello = () => {
  const coders = getData()
  const helloStr = coders.reduce((carry, coder) => {
    carry += `Hi, ${coder.name}`
    return carry
  }, "")
  return helloStr
}

module.exports = sayHello