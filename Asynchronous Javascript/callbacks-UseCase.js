/*
    Understanding Asynchronous Javascript with the help of callbacks
*/

function download(url){
    console.log(`Downloading from the ${url}`);
    setTimeout(()=> {
        console.log(`File has been succesfully downloaded`)
    },3000);
}

function compress(filepath){
    console.log(`compressing the file ${filepath}`);
    setTimeout(()=>{
        console.log(`Compressed Successfully and saved as ${filepath.split('.')[0] + '.zip'}`)
    }
    ,3000)

}

function upload(server,file){
    console.log(`Uploading ${file} to the %{server}`)
    setTimeout(()=>{
        console.log(`Upload successfully to ${server}/${file}`)
    },3000)
}

download("https://www.google.com/imagesa1")
compress("myfile.png")
upload("D","Images.png")

//There's a problem here in that upload happens even after download has been completed due to asynchronous nature of javascript
//So to make it as sequential in nature ,we need callbacks 


//10:50
