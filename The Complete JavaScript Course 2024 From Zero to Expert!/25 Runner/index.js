#!/usr/bin/env node
//npm init -y
//npm link
import chokidar from "chokidar"
import debounce from "lodash.debounce"
import program from "caporal"
import fs from "fs"
import chalk from "chalk"
import {spawn} from "child_process"

program
    .version("0.0.1")
    .argument("[filename]","Name of a file to exectue")
    .action(async ({filename}) => {
        const name = filename || 'index.js';

        try {
        await fs.promises.access(name);
        } catch (err) {
        throw new Error(`Could not find the file ${name}`);
        }

        let proc
        const start = debounce(() => {
            if (proc) {
                proc.kill()
            }
            console.log(chalk.yellow(">>>> Starting Process..."))
            proc = spawn("node", [name], {stdio: "inherit"})
        }, 100)
        chokidar
            .watch(".")
            .on("add", start)
            .on("change", start)
            .on("unlink", start)
    })
program.parse(process.argv)