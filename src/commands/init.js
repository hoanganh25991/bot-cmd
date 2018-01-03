export const desProgram = program => {
  program.version("0.0.1").description("Serverless with lamda")
}

export const start = program => program.parse(process.argv)
