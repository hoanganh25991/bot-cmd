import fs from "fs-extra"
import path from "path"
import os from "os"

const _ = console.log
const log = strs => {
  const joined = strs.join(os.EOL)
  _(joined)
}

export const createFunc = name => console.log(`${name} created`)

export const lambdaCmd = program => {
  program
    .command("project:init <name>")
    .alias("init")
    .description("Init bot project")
    .action(name => {
      const projectDirExist = fs.pathExistsSync(name)

      if (projectDirExist) {
        log([`Directory "${name}" already exist`, `Please update your project name`])
        return
      }

      const lambdaDir = path.join(name, "lambda")
      fs.mkdirsSync(lambdaDir)

      const templateDir = path.join(__dirname, "template")
      fs.copySync(templateDir, lambdaDir)

      createFunc(name)
    })
}
