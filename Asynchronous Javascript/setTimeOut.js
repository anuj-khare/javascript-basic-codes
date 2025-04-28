
console.log("Start")
setTimeout(function (){
    console.log("Inside setTimeout")
},3000);
console.log("WOW")

//Output => Start,WOW,Inside setTimeout 
//The way setTimeout works is it does not block the execution.
//so start gets printed,wow gets printed and after 3 seconds,Inside setTimeout gets printed