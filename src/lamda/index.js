module.exports.createFunc = name => console.log(`Creating... ${name}`)
module.exports.integrate = name => console.log(`Integrating... ${name}`)
module.exports.storeProfile = info => {
  console.log(info)
  const infoStr = Object.keys(info).reduce((carry, key) => {
    const val = info[key]
    carry += `${key}: ${val}, `
    return carry
  }, "")
  console.log(`Storing... ${infoStr}`)
}
