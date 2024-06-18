const fs = require('fs')
const path = require('path')
const process = require('process')


function cat(path){
fs.readFile('one.txt', 'utf8',(err, path) => {
    if (err){
        console.log("Error:no such file or directory, open one.txt")
        process.kill(1)
    }
    else{
        console.log("DATA...", path)
    }
})   
}


cat(process.argv[2]);
