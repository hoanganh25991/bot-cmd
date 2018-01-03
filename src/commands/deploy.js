import { prompt } from "inquirer"

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

export const deploy = info => console.log("info", info)

export const deployCmd = program => {
  program
    .command("deploy <name>")
    .alias("func")
    .description("Add a lamda function")
    .action(name => {
      const askWait = prompt(questions)
      return askWait.then(info => deploy(info))
    })
}
