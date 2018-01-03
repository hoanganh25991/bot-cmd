"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
const desProgram = (exports.desProgram = program => {
  program.version("0.0.1").description("Serverless with lamda")
})

const start = (exports.start = program => program.parse(process.argv))
