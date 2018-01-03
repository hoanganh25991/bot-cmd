import { prompt } from "inquirer"
import fs from "fs-extra"
import cpr from "child_process"

const questions = [
  {
    type: "input",
    name: "awsKey",
    message: "Enter aws key"
  },
  {
    type: "input",
    name: "awsSecret",
    message: "Enter aws secret"
  }
]

export const deploy = info => console.log("info", info)

export const checkAwsCredential = async () => {
  const awsDir = ".aws"
  const awsDirExist = fs.pathExistsSync(awsDir)

  if (awsDirExist) {
    // Should ask for update/not
    // Simple return
    return
  }

  const { awsKey, awsSecret } = await prompt(questions)
  const cmd = `serverless config credential --provider aws --key ${awsKey} --secret ${awsSecret}`
  cpr.execSync(cmd)

  const awsOriginDir = "~/.aws"
  fs.copySync(awsOriginDir, awsDir)
}

export const deployCmd = program => {
  program
    .command("deploy")
    .description("Deploy lambda function")
    .action(() => {
      const askWait = prompt(questions)
      return askWait.then(info => deploy(info))
    })
}
