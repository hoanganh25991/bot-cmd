const program = require("commander")
const { prompt } = require("inquirer")

const { createFunc, integrate, storeProfile } = require("./lamda")

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

const questions = [
  {
    type: "input",
    name: "firstname",
    message: "Enter firstname"
  },
  {
    type: "input",
    name: "lastname",
    message: "Enter lastname"
  }
]

program
  .command("profile") // No need of specifying arguments here
  .alias("prof")
  .description("Add user profile")
  .action(() => {
    const wait = prompt(questions)
    return wait.then(answers => storeProfile(answers)).catch(err => console.log(err))
  })

program.parse(process.argv)
