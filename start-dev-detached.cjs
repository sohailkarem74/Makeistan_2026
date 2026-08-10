const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const cwd = __dirname;
const out = fs.openSync(path.join(cwd, "dev-server.log"), "a");
const err = fs.openSync(path.join(cwd, "dev-server.err.log"), "a");

const child = spawn("C:\\Program Files\\nodejs\\node.exe", ["node_modules\\next\\dist\\bin\\next", "dev", "--turbopack", "-p", "3010"], {
  cwd,
  detached: true,
  stdio: ["ignore", out, err],
  windowsHide: true,
});

child.unref();
console.log(child.pid);
