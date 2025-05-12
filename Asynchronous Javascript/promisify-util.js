
// @ts-nocheck
const util = require('util');


function download(url,downloaded){
    console.log(`Downloading from the ${url}`);
    setTimeout(()=> {
        let savedFile = url.split('/').pop()
        console.log(`File has been succesfully downloaded`)
        if(!url.startsWith("http")){
            downloaded(new Error("url must start with http/https"));
        }
        downloaded(null,savedFile)
    },5000);
}

function compress(filepath,format,compressed){
    console.log(`compressing the file ${filepath}`);
    if(['zip','gzip','7z'].indexOf(format) === -1){
        compressed(new Error("Compressing format is not supported"))
    }
    setTimeout(()=>{
        let archivedFile = filepath.split('.')[0] + format;
        console.log(`Compressed Successfully and saved as ${filepath.split('.')[0] + '.zip'}`);
        compressed(null,archivedFile);
    }
    ,3000)

}

function upload(server,file){
    console.log(`Uploading ${file} to the ${server}`)
    setTimeout(()=>{
        console.log(`Upload successfully to ${server}/${file}`)
    },2000)
}

function alternateUpload(server,file,postUpload){
    console.log(`Uploading ${file} to the server`)
    if(!server.startsWith('ftp')){
        return postUpload(new Error("we only upload to the ftp servers"))
    }
    setTimeout(()=>{
        let remotePath = `${server}/${file}`
        postUpload(null,remotePath)
    },2000)
}

const downloadPromise = util.promisify(download)
const compressPromise = util.promisify(compress)
const uploadPromise = util.promisify(alternateUpload)

downloadPromise("http://www.google.com/image1")
    .then((downloadedFile)=>{   
        compressPromise(downloadedFile,'zip')
        .then((compressedFile) =>{
            uploadPromise("ftp://D",compressedFile)
            .then((remotePath)=>{
                console.log(`File uploaded to ${remotePath}`)
            })
            .catch((err)=>{
                throw err
            })
        })
        .catch((err)=>{
            throw err
        })
    })
    .catch((err)=>{
        console.error(err.message)
    })


/*
    You always need to write callbacks in error-first callback convention if you want to use Node.js util.promisify to convert callbacks
    to promises where in first argument in a callback is always reserved for error

    function callback(error, result) {
        // if error is not null, reject
        // else resolve with result
    }

*/


/* Note : the code above can be optimised a little bit so that prommise chain stays intact : 

downloadPromise("url")
    .catch(err => {
        console.log("Download error");
        throw err;
    })
    .then(file => {
        // compress stage with local error handling
        return compressPromise(file, 'zip')
            .catch(err => {
                console.log("Compression error");
                throw err;
            });
    })
    .then(zip => {
        // upload stage
        return uploadPromise("ftp://server", zip)
            .catch(err => {
                console.log("Upload error");
                throw err;
            });
    })
    .then(result => {
        console.log("All done");
    })
    .catch(err => {
        console.log("Final catch for any uncaught errors");
    });

    Here,the idea is to : 
    The idea is to always return a promise from a .then() block so that the promise chain stays intact.
    If I want separate error handling for each stage,
    I can nest a .catch() inside the .then(), 
    but I must always return the (possibly recovered or rethrown) promise,
     so that subsequent .then()s behave as expected."

     so always return prommise from inside the then block.
*/ 

