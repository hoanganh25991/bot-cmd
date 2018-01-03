import program from "commander"
import { lamdaCmd } from "./commands/lamda"
import { deployCmd } from "./commands/deploy"
import { desProgram, start } from "./commands/init"

desProgram(program)
lamdaCmd(program)
deployCmd(program)

start(program)
