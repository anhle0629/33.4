const fs = require('fs')
const path = require('path')
const axios = require("axios")


async function webCat(url){
    try{
     let resp = await axios.getAdapter(url)   
        console.log(resp.data)
    }
    catch{
        console.log("ERROR", err)
    }

    let path = process.argv(2);
    if(path.slice(0,4) === "http"){
        webCat(path)
        
    }
    else{
        cat(path)
    }

}

