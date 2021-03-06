#!/usr/bin/env node


const chalk = require('chalk');
const version = require('../package.json').version;
const { start } = require('../src/index.js');


!(function(){
    console.log(`[${new Date().toLocaleString()}]`);
    const desc = `[===== d-deploy | v${version} =====]`;
    const styleDesc = chalk.cyan(chalk.bold(desc));
    console.log(styleDesc, `[${process.cwd()}]`, '\n');

    try{
        start();
    }catch (err){
        console.log(err);
    }
})()