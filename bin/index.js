#!/usr/bin/env node
"use strict"

var _commander = require("commander")

var _commander2 = _interopRequireDefault(_commander)

var _project = require("./commands/project")

var _deploy = require("./commands/deploy")

var _init = require("./commands/init")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

;(0, _init.desProgram)(_commander2.default)
;(0, _project.lambdaCmd)(_commander2.default)
;(0, _deploy.deployCmd)(_commander2.default)

;(0, _init.start)(_commander2.default)
