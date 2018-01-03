"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.lambdaCmd = exports.createFunc = undefined

var _fsExtra = require("fs-extra")

var _fsExtra2 = _interopRequireDefault(_fsExtra)

var _path = require("path")

var _path2 = _interopRequireDefault(_path)

var _os = require("os")

var _os2 = _interopRequireDefault(_os)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const _ = console.log
const log = strs => {
  const joined = strs.join(_os2.default.EOL)
  _(joined)
}

const createFunc = (exports.createFunc = name => console.log(`${name} created`))

const lambdaCmd = (exports.lambdaCmd = program => {
  program
    .command("project:init <name>")
    .alias("init")
    .description("Init bot project")
    .action(name => {
      const projectDirExist = _fsExtra2.default.pathExistsSync(name)

      if (projectDirExist) {
        log([`Directory "${name}" already exist`, `Please update your project name`])
        return
      }

      const lambdaDir = _path2.default.join(name, "lambda")
      _fsExtra2.default.mkdirsSync(lambdaDir)

      const templateDir = _path2.default.join(__dirname, "template")
      _fsExtra2.default.copySync(templateDir, lambdaDir)

      createFunc(name)
    })
})
