/**
 * Promise.all is a method in JavaScript that takes an iterable (e.g., an array) of promises as input
 *  and returns a single promise. This returned promise fulfills when all of the input promises have fulfilled, 
 *  with an array of their fulfillment values in the same order as the input promises. 
 *  If any of the input promises reject, the returned promise immediately rejects with the rejection reason of the first promise that rejected.
    It is often used when there are multiple asynchronous tasks that are independent of each other but whose combined results are needed to proceed.
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

// async function task(){
//     let file1 = await downloadPromise("http://www.google.com/image1")
//     let file2 = await downloadPromise("http://www.google.com/image2")
//     let file3 = await downloadPromise("http://www.google.com/image3")

//     let arch1 = await compressPromise(file1,'zip')
//     let arch2 = await compressPromise(file2,'zip')
//     let arch3 = await compressPromise(file3,'zip')

//     await alternateUpload("ftp://D",arch1)
//     await alternateUpload("ftp://D",arch2)
//     await alternateUpload("ftp://D",arch3)
// }

/**
 * Note : This is called async-await hell,when you are waiting for a particular promise to resolve before execution of furthre files.
 *        What you could have instead was simply group downloads,compresses and uploads in a single promise using 
 *        Promise.all
 */

// async function task(){
//     try{
//         const downloadedFiles = await Promise.all([
//         downloadPromise("http://www.google.com/image1"),
//         downloadPromise("http://www.google.com/image2"),
//         downloadPromise("http://www.google.com/image3")
//         ])
//         const compressedFiles = await Promise.all([
//             downloadedFiles.map(file => compressPromise(file,'azip'))
//         ])
//         const uploadedPaths = await Promise.all([
//             compressedFiles.map(archivedFile => alternateUpload("ftp://D",archivedFile))
//         ])
//     }
//     catch(err){
//         console.log(err)
//         throw new Error("Ran into some error")
//     }
    
    
// }


async function task(){
    try{
        const downloadedFiles = await Promise.all([
        downloadPromise("http://www.google.com/image1"),
        downloadPromise("http://www.google.com/image2"),
        downloadPromise("http://www.google.com/image3")
        ])
        const compressedFiles = await Promise.all([
            compressPromise(downloadedFiles[0],'zip'),
            compressPromise(downloadedFiles[1],'zip'),
            compressPromise(downloadedFiles[2],'zip')
        ])
        const uploadedPaths = await Promise.all([
            compressedFiles.map(archivedFile => alternateUpload("ftp://D",archivedFile))
        ])
    }
    catch(err){
        console.log(err)
        throw new Error("Ran into some error")
    }
    
    
}

task()