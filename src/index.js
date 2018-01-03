const program = require("commander")
const { prompt } = require("inquirer")
const YAML = require("yamljs")
const fs = require("fs")

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

const awsNodejs = {
  functions: {
    hello: {
      handler: "handler.hello",
      events: [
        {
          http: {
            path: "hello",
            method: "GET"
          }
        },
        {
          http: {
            path: "welcome",
            method: "GET"
          }
        }
      ]
    }
  }
}

const ymlStr = YAML.stringify(awsNodejs, 100, 2)

const build = () => {
  console.log(ymlStr)
  console.log("serverless.yml saved")
  fs.writeFileSync("tmp/test.yml", ymlStr)
}

program
  .command("yml") // No need of specifying arguments here
  .description("build yml file")
  .action(() => {
    build()
  })

program.parse(process.argv)
