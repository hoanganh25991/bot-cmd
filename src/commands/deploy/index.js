import { prompt } from "inquirer"
import fs from "fs-extra"
import cpr from "child_process"
import os from "os"
import path from "path"
import ymlDefault from "./ymlDefault.json"
import YML from "yamljs"

const _ = console.log

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
  try {
    const awsDir = ".aws"
    const awsDirExist = fs.pathExistsSync(awsDir)

    if (awsDirExist) {
      // Should ask for update/not
      // Simple return
      return
    }

    const { awsKey, awsSecret } = await prompt(questions)
    const cmd = `serverless config credentials --provider aws --key ${awsKey} --secret ${awsSecret} --override`
    _(cpr.execSync(cmd).toString())

    const homeDir = os.homedir()
    const awsOriginDir = path.join(homeDir, ".aws")
    fs.copySync(awsOriginDir, awsDir)
  } catch (err) {
    _(`checkAwsCredential Fail`, err)
  }
}

/**
 * Deploy running inside project dir
 * Relative path should consider relative to project dir
 */
export const buildYml = async () => {
  await checkAwsCredential()
  // Has .aws/credentail to handle serverless deploy
  // Build yml file first
  // Case api gateway
  const botObj = fs.readJSONSync(".bot.json")
  const { project: { name } } = botObj
  const ymlFileName = "serverless.yml"
  // const { endpoints } = { endpoints: [{ path: "/hello", method: "GET" }] }
  const lambdaIndex = path.join("lambda", "index.js")
  fs.copySync(lambdaIndex, path.join(__dirname, lambdaIndex))
  const { endpoints } = require("./lambda/index")

  const httpEvents = endpoints.map(endpoint => {
    const { path, method } = endpoint
    return { http: { path, method } }
  })

  const ymlObj = {
    ...ymlDefault,
    functions: {
      [name]: {
        handler: "lambda/index.handler",
        events: httpEvents
      }
    }
  }

  _("[ymlObj]", ymlObj)

  const ymlStr = YML.stringify(ymlObj, 10, 2)
  fs.outputFileSync(ymlFileName, ymlStr)
}

/**
 * Deploy running inside project dir
 * Relative path should consider relative to project dir
 */
export const deployOffline = async () => {
  await buildYml()
  const cmd = "serverless offline"
  _(new Date().getTime())
  // const child = cpr.exec(cmd, (err, stdout, stderr) => {
  //   _(stdout)
  // })

  const child = cpr.exec(cmd, {
    // detachment and ignored stdin are the key here:
    detached: true,
    stdio: ["ignore", 1, 2]
  })

  child.unref()

  child.stdout.on("data", function(data) {
    console.log(data.toString())
  })
}

/**
 * Deploy running inside project dir
 * Relative path should consider relative to project dir
 */
export const deployToAws = async () => {
  await buildYml()
  const cmd = "serverless deploy"
  // _(cpr.execSync(cmd).toString())

  const child = cpr.exec(cmd, {
    // detachment and ignored stdin are the key here:
    detached: true,
    stdio: ["ignore", 1, 2]
  })

  child.unref()

  child.stdout.on("data", function(data) {
    console.log(data.toString())
  })
}

/**
 * Deploy running inside project dir
 * Relative path should consider relative to project dir
 * @param program
 */
export const deployCmd = program => {
  program
    .command("deploy")
    .description("Deploy lambda function")
    .option("--offline", "Offline")
    .action(async options => {
      const { offline } = options

      if (offline) {
        await deployOffline()
        return
      }

      await deployToAws()
    })
}
