
function fakeDownloadPromise(flag){
    return new Promise(function(resolve,reject,){
        setTimeout(function () {
            let downloadedData = "Some data that is to be downloaded from the internet";
            let cantDownloadData = "Error downloading data from Internet";
            if(flag){
                resolve(downloadedData);
            }
            reject(cantDownloadData);
        },3000);
    })
}

let a = fakeDownloadPromise(true)

setTimeout(function (){
    console.log("3 seconds have passed");
    a.then(
        function (data){
            console.log("Download Complete,now Logging the download material");
            console.log(data);
        }
    )
},3000)