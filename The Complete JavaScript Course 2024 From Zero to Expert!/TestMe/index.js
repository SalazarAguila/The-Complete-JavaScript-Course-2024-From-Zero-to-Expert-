#!/usr/bin/env node
/*
TO RUN A COMMAND FROM ANYWHERE
-Add to pakage.json:
  "bin":{
    "command name": "index.js"
 ex:"tme": "index.js"
  }
-On console, run:  
npm link
-On console, run:
command name
ex: tme
*/
const Runner = require("./runner")
const runner = new Runner()

const run = async () => {
  await runner.collectFiles(process.cwd())
  runner.runTests()
}

run()