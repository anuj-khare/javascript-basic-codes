let intervalId;
var runCount = 0;

function sayHello(){
    if(runCount == 5){
        clearInterval(intervalId);
    }
    runCount++;
    console.log("Hi Guys !!!");
}

intervalId = setInterval(sayHello,2000);

//setInterval runs periodically for a given time,returns an intervalId and when you want to stop it,
//you use clearInterval(intervalId) to stop it.

setInterval(function a(){
    console.log("This will run every 3 seconds")
},2000)