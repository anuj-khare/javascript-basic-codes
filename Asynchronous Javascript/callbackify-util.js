// @ts-ignore
// @ts-nocheck
const util = require('util')

function downloadPromise(url){
    return new Promise((resolve,reject)=>{
        console.log(`downloading from the ${url}`);
        if(!url.startsWith('http')){
            return reject(new Error("url must start with http/https"))
        }
        setTimeout(()=>{
            let savedFile = url.split('/').pop()
            console.log('File has been successfully downloaded')
            resolve(savedFile)
        },5000)
    })
}

function compressPromise(filepath,format){
    return new Promise((resolve,reject)=>{
        console.log(`compressing the file ${filepath}`);
        if(['zip','gzip','7z'].indexOf(format) === -1){
            return reject(new Error("Compressing format is not supported"))
        }
        setTimeout(()=>{
            let archivedFile = filepath.split('.')[0] + '.' + format;
        console.log(`Compressed Successfully and saved as ${filepath.split('.')[0] + '.zip'}`);
        resolve(archivedFile);
        },3000)
    })
}

function upload(server,file){
    console.log(`Uploading ${file} to the ${server}`)
    if(!server.startsWith("ftp")){
        throw new Error("we upload only to ftp servers")
    }
    setTimeout(()=>{
        console.log(`Upload successfully to ${server}/${file}`)
    },2000)
}

function alternateUpload(server,file){
    return new Promise((resolve,reject)=>{
        console.log(`Uploading ${file} to the server`)
        if(!server.startsWith('ftp')){
            return reject(new Error("we only upload to ftp servers"))
        }
        setTimeout(()=>{
            let remotePath = `${server}/${file}`
            resolve(remotePath)
        },2000)
    })
}

const downloadCallback = util.callbackify(downloadPromise)
const compressCallback = util.callbackify(compressPromise)
const uploadCallback = util.callbackify(alternateUpload)


downloadCallback("http:www.google.com/image1",(err,downloadedFile)=>{
    if(err){
        throw err;
    }
    compressCallback(downloadedFile,'zip',(err2,archivedFile)=>{
        if(err2){
            throw err2
        }
        uploadCallback("ftp://D",archivedFile,(err3)=>{
            if(err3){
                throw err3
            }
            console.log("successfully done")
        })
    })
})

//Note : If you do below ,first argument will be reserved for error,now since there is no error,downloadedfile will be null and passed along to the compressCallback hence giving us null value

downloadCallback("http:www.google.com/image1",(downloadedFile)=>{
    // if(err){
    //     throw err;
    // }
    compressCallback(downloadedFile,'zip',(err2,archivedFile)=>{
        if(err2){
            throw err2
        }
        uploadCallback("ftp://D",archivedFile,(err3)=>{
            if(err3){
                throw err3
            }
            console.log("successfully done")
        })
    })
})