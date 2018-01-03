export const createFunc = () => console.log("...")

export const lamdaCmd = program => {
  program
    .command("function <name>")
    .alias("func")
    .description("Add a lamda function")
    .action(name => {
      createFunc(name)
    })
}
