"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.deployCmd = exports.deploy = undefined

var _inquirer = require("inquirer")

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

const deploy = (exports.deploy = info => console.log("info", info))

const deployCmd = (exports.deployCmd = program => {
  program
    .command("deploy <name>")
    .alias("func")
    .description("Add a lamda function")
    .action(name => {
      const askWait = (0, _inquirer.prompt)(questions)
      return askWait.then(info => deploy(info))
    })
})
