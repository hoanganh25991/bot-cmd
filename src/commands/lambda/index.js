import fs from "fs-extra"
import path from "path"
export const createFunc = () => console.log("...")

export const lambdaCmd = program => {
  program
    .command("lambda:create <name>")
    .alias("func")
    .description("Add a lamda function")
    .action(name => {
      const lambdaDir = path.join("lambda", name)
      fs.mkdirsSync(lambdaDir)

      const templateDir = path.join(__dirname, "template")
      fs.copySync(templateDir, lambdaDir)

      createFunc(name)
    })
}
