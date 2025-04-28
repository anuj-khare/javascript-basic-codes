
/*
    Read this article : https://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/ 

    The first argument in reserved for errors is what is basically being assumed,its not a rule but it is generally globally accepted convention
*/


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
    if(!server.startsWith("ftp")){
        throw new Error("we upload only to ftp servers")
    }
    setTimeout(()=>{
        console.log(`Upload successfully to ${server}/${file}`)
    },2000)
}


download("www.google.com/imagea1",(error1,fileName)=>{
    if(error1){
        throw error1;
    }
    compress(fileName,"zip",(error2,compressedFile) =>{
        if(error2){
            throw error2
        }
        upload("D",compressedFile);
    })
})
