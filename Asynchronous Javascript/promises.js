function fakeDownload(done){
    setTimeout(function (){
        console.log("Executing setTimeout")//1
        let downloadedData = "Some data we ripped off the interwebs";//3
        done(downloadedData)
    },4000)
}


fakeDownload(function(data){
    console.log("Entering the provided callback function now");//2
    console.log(data);
})


//Promise takes executor as an argument

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


fakeDownloadPromise(true).then(
    function(data){
        console.log("Promise resolved,Hence executing resolve callback function")
        console.log(data);
    }
).catch(function (data){
    console.log("Promise got rejected,Hence executing reject callback function");
    console.log(data)
}
)
/*
    The way promises are designed are : when you call resolve from inside promises,the passed given in THEN block is executed.
    If you call reject from inside a promise,the function given in CATCH block is executed
*/