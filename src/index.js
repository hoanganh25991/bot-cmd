const program = require("commander")
const { createFunc, integrate } = require("./lamda")

program.version("0.0.1").description("Serverless with lamda")

program
  .command("function <name>")
  .alias("func")
  .description("Add a lamda function")
  .action(name => {
    createFunc(name)
  })

program
  .command("integrate <plaform>")
  .alias("i")
  .description("Integrate lamda func to platform")
  .action(name => integrate(name))

program.parse(process.argv)
