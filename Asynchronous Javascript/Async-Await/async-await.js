/*
    Async function is a function that runs asynchronously in the background,
    and the code inside it can run synchronously one after the other
    You can use await inside an async function and what it does is,
    it runs a promise based function and instead of using then/catch ,
    it actually waits for the function to end
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


async function task(){
    const file  = await downloadPromise("http://www.google.com/image1")
    const archivedFile = await compressPromise(file,'zip')
    await alternateUpload("ftp://D",archivedFile)
}

// async function task(){
//     try{
//         const file  = await downloadPromise("http://www.google.com/image1")
//         const archivedFile = await compressPromise(file,'zip')
//         await alternateUpload("ftp://D",archivedFile)
//     }
//     catch(err){
//         console.error("There was some error")
//     }
// }

console.log('task started')
task()
console.log('task ended') //you will see that this line gets printed before task() function ends,which means that task function runs asynchronously

/**
 * O/P:
    task started
    downloading from the http://www.google.com/image1
    task ended
    File has been successfully downloaded
    compressing the file image1
    Compressed Successfully and saved as image1.zip
    Uploading image1.zip to the server
 */

/**
 * What happens when you write a async function is that this task function returns a promise always
 */