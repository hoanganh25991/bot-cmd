import cpr from "child_process"
import path from "path"
import fs from "fs-extra"

const _ = console.log
const rootPath = path.join(__dirname, "..")
const srcDir = path.join(rootPath, "src")
const binDir = path.join(rootPath, "bin")

_("[INFO] Cp src")
fs.copySync(srcDir, binDir)

_("[INFO] Run build")
_(cpr.execSync(`babel ${srcDir} --out-dir=${binDir}`).toString())
