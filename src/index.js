#!/usr/bin/env node
import program from "commander"
import { projectCmd } from "./commands/project"
import { deployCmd } from "./commands/deploy"
import { desProgram, start } from "./commands/init"

desProgram(program)
projectCmd(program)
deployCmd(program)

start(program)
