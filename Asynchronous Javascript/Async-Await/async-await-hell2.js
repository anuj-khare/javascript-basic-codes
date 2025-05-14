/**
 * In the last file,we went for blocking await (parallel downloads) => await (parallel compressions) => await (paralled uploads) using Promise.all
 * Now ,Here we will try 2nd approach 
 * await ( download-> compress -> upload for file 1) => await (download -> compress -> upload for file2 ) => await ( download -> compress -> upload for file3) meaning these 3 files will be processed parallely
 */


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

async function task1(){
    const file1 = await downloadPromise("http://www.google.com/image1")
    const arch1 = await compressPromise(file1,'zip')
    await alternateUpload("ftp://D",arch1)
}

async function task2(){
    const file1 = await downloadPromise("http://www.google.com/image2")
    const arch1 = await compressPromise(file1,'zip')
    await alternateUpload("ftp://D",arch1)
}

async function task3(){
    const file1 = await downloadPromise("http://www.google.com/image3")
    const arch1 = await compressPromise(file1,'zip')
    await alternateUpload("ftp://D",arch1)
}

async function task(){
    try{
        await Promise.all([
            task1(),
            task2(),
            task3()
        ])
    }
    catch(err){
        console.log(err)
        throw new Error("Ran into some error")
    }
    
    
}

task()