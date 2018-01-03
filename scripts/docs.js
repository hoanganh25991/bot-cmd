import cpr from "child_process"

const _ = console.log
const cmd = `postmanerator -output=tmp/doc.html -collection=tmp/vnexcoin.postman_collection.json`

_("[INFO] Generate docs in tmp folder")
_(cpr.execSync(cmd).toString())
