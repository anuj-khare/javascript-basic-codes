//Immediately Invoked Function Expressions In Javascript

(function sayHello(msg){
    console.log(msg)
})("mybad");

//sayHello("Super Re Anna")  : If you call this function again,it will give undefined as its been executed 
//and thus removed from the scope and so are the variables declared inside this IIFE

/*
function sayHello(msg){
    console.log(msg);
}())   

If you declare like this,this wont work because as soon as js compiler encounters function keyword it starts a function definition,so it doesnt expect it to be executed immediately.
Thats why even when you call it , it doesnt work
*/

//Use Case 2 :

if(true){
    (function(){
        var a = 10;
    })();
}
//console.log(a);//Not defined bcoz a only has scope of IIFE even though a is declared using var which has function scope

//Use Case 3:

(function myfunc(p,r,s,X){
    X(p(3,4));
    X(p(4,3));
    X(r(4));
    X(s(1.5708));
})(Math.pow,Math.sqrt,Math.sin,console.log);
