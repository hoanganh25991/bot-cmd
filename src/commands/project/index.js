import fs from "fs-extra"
import path from "path"
import os from "os"

const _ = console.log
const log = strs => {
  const joined = strs.join(os.EOL)
  _(joined)
}

export const createFunc = name => console.log(`${name} created`)

export const projectCmd = program => {
  program
    .command("project:init <name>")
    .alias("init")
    .description("Init bot project")
    .action(projectName => {
      const projectDir = projectName
      const projectDirExist = fs.pathExistsSync(projectDir)

      if (projectDirExist) {
        log([`Directory "${projectDir}" already exist`, `Please update your project name`])
        return
      }

      const templateDir = path.join(__dirname, "template")
      fs.copySync(templateDir, projectDir)

      createFunc(projectDir)
    })
}
