//We also have something called a deferred resolve in javascript meaning ,you can deal with a resolved promise later,but you have to deal with rejected case immediately


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

fakeDownloadPromise(true) //In this scenario,resolve will be called from inside promise and since we havent passed any function to be mapped with resolve(which happens inside then block),
//that is fine,since we can deal with resolved promise later.
fakeDownloadPromise(false) //Here,reject will be called from inside promise,now the problem is that we havent handled this case in catch block to be mapped with reject,
//In that manner,we havent handled the reject scenario and that is something that is not allowed in javasript

// fakeDownloadPromise(true).then(
//     function(data){
//         console.log("Promise resolved,Hence executing resolve callback function")
//         console.log(data);
//     }
// ).catch(function (data){
//     console.log("Promise got rejected,Hence executing reject callback function");
//     console.log(data)
// }
// )
