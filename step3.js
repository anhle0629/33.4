const fs = require('fs')
const path = require('path')
const axios = require("axios")



function handleOutput(out, text){
    fs.writeFile(out, text, {encoding:'utf8', flag:'a'}, err =>{
        if (err){
            console.log(`couldn't write ${out}: ${err}`)
        }
        else{
            console.log(text)
        }
    })
}

function cat(path, out){
    fs.readFile(path, 'utf8', (err,data) =>{
        if (err){
            console.log(`could not print put ${data}`, err)
        }
        else{
            console.log(data)
        }
    })
}

async function webCat(url,out){
    try{
        let resp = await axios.get(url)
        handleOutput(resp.data, out)
    }
    catch (error){
        console.log(`error fetching ${url}`, error)
        process.exit(1)
    }

    let path;
    let out;

    if (process.argv[2] === '--out') {
        out = process.argv[3];
        path = process.argv[4];
        } else {
            path = process.argv[2];
    }

    if (path.slice(0, 4) === 'http') {
        webCat(path, out);
    } else {
            cat(path, out);
            }

}