import program from "commander"
import { lambdaCmd } from "./commands/project"
import { deployCmd } from "./commands/deploy"
import { desProgram, start } from "./commands/init"

desProgram(program)
lambdaCmd(program)
deployCmd(program)

start(program)
