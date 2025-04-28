function download(url,downloaded){
    console.log(`Downloading from the ${url}`);
    setTimeout(()=> {
        let savedFile = url.split('/').pop()
        console.log(`File has been succesfully downloaded`)
        downloaded(savedFile)
    },5000);
}

function compress(filepath,format,compressed){
    console.log(`compressing the file ${filepath}`);
    setTimeout(()=>{
        let archivedFile = filepath.split('.')[0] + format;
        console.log(`Compressed Successfully and saved as ${filepath.split('.')[0] + '.zip'}`);
        compressed(archivedFile);
    }
    ,3000)

}

function upload(server,file){
    console.log(`Uploading ${file} to the ${server}`)
    setTimeout(()=>{
        console.log(`Upload successfully to ${server}/${file}`)
    },2000)
}


download("www.google.com/imagea1",(fileName)=>{
    compress(fileName,"zip",(compressedFile) =>{
        upload("D",compressedFile);
    })
})
