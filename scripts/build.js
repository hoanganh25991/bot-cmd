import cpr from "child_process"
import path from "path"

const _ = console.log
const rootPath = path.join(__dirname, "..")

_("[INFO] Run build")
_(cpr.execSync(`babel ${rootPath}/src --out-dir=${rootPath}/dist`).toString())
