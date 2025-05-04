/**
 * Ideally we want to reach synchronous code : 
 * download => compress => upload
 * Promise will help us get there
 
    const file = download("http:www.google.com/imagee1")
    const zip = compress(file,'zip')
    upload("ftp://files.com",zip)

    if we want to achieve syncrhonous nature ,we need to understand promises which will help us convert asynchronous code to synchronous via async await syntax
*/

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

// downloadPromise("http://www.google.com/image1")
//     .then((downloadedFile)=>{
//         compressPromise(downloadedFile,'zip')
//             .then((compressedFile)=>{
//                 alternateUpload("ftp",compressedFile)
//     })
// })

//One catch block catches all the errors
// downloadPromise("www.google.com/image1")
//     .then((downloadedFile) => compressPromise(downloadedFile,'zip'))
//     .then((archiveFile) => alternateUpload("ftp://D",archiveFile))
//     .catch((err)=>{
//         console.log(err)
//     }
// )

//separate catch block for all the layers

// downloadPromise("www.google.com/image1")
// .catch((err)=>{
//     console.log("error in downloading the file")
//     throw err;
//     /*
//         if you dont throw err from here,
//         ⚠️ If your .catch() doesn’t throw or return a rejected Promise, 
//             then the chain continues as resolved, and .then() runs — even though the original downloadPromise() failed.
//     */
    
// })
// .then((downloadedFile) => compressPromise(downloadedFile,'Azip'))
// .catch((err)=>{
//     console.log("Error in compressing the file")
//     throw err;
    
// })
// .then((archiveFile) => alternateUpload("ftp://D",archiveFile))
// .catch((err)=>{
//     console.log("failure to upload file")
//     throw err;    
// })


//How to stop chain at the first error and final catch block will log the error

// downloadPromise("http://www.google.com/image1")
//     .then((downloadedFile) => {
//         return compressPromise(downloadedFile, 'Azip')
//             .catch((err) => {
//                 // rethrow with step-specific error message
//                 throw new Error("Compression failed: " + err.message);
//             });
//     })
//     .then((compressedFile) => {
//         return alternateUpload("ftp://D", compressedFile)
//             .catch((err) => {
//                 throw new Error("Upload failed: " + err.message);
//             });
//     })
//     .catch((finalError) => {
//         console.error("Process failed:", finalError.message);
//         // No further .then() will run beyond this point
//     });
