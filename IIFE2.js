for(var i=0;i<10;i++){
    setTimeout(function myfunc(){
        console.log(i);
    },100)
}
//This will give output 10 ,10 ,10 .......10 times
//closures


for(var i=0;i<10;i++){
    (function myfun(j){
        setTimeout(function f(){
            console.log(j);
        },100)
    })(i)
}
//This will give output from 0 to 9

//or one way to deal with this kind of problem is to simply use let instead of var 
//because let creates an internal closure which gets bound to every iteration of function 
//a new i gets inside the closure inside every iteration when we're using let

for(let i=0;i<10;i++){
    setTimeout(function myfunc(){
        console.log(i);
    },100)
}


//Another approach : In case you're not using ECMASCRIPT 6

for(var i=0;i<10;i++){
    setTimeout(console.log,100,i);
}