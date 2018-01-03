import fs from "fs-extra"
import path from "path"
import os from "os"
import cpr from "child_process"

const _ = console.log
const log = strs => {
  const joined = strs.join(os.EOL)
  _(joined)
}

export const createFunc = name =>
  console.log(`${name} created.${os.EOL}Please install global package serverless.${os.EOL} yarn global add serverless`)

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

      const botObj = { project: { name: projectName } }
      const botJsonFile = ".bot.json"
      fs.writeJSONSync(path.join(projectDir, botJsonFile), botObj)

      // Check if has yarn/npm
      // const npmCmd = "npm install serverless -g"
      // const yarnCmd = "yarn global add serverless"
      // _(cpr.execSync(yarnCmd))

      createFunc(projectDir)
    })
}
