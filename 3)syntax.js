// single line comment 
/* multi
line 
comments */

//variable declaration

var a =10;//semi-colons are optional
var b = 20;//var used to create keywords in js earlier
//now since ecmascript6,2 new keywords are there to create keywords

let c = 30;
const d = 101;
c++;
// d++; -> not possible as d is constant
console.log(c);
console.log(d);

//data types and variables in js


let str = "this is a string";
let bool = true;
let num =1;
console.log(num);
num = "jenkins";
console.log(num);//num is a variable and it can hold data of any type

//according to javascript,variable does not has a type but data has.
//data has type for ex : integer,string ,boolean. but a variable can hold any type of data.


let temp = 1;
console.log(typeof temp);
temp = "devops";
console.log(typeof temp);


//now we can directly write line by line in browser console : 
//let x=11; iska output will be undefined
//console.log(x); iska output mei x will be printed and then undefined will also be there,reason being return value of 
//these kinds of things in js is undefined 

//type of  null is an object in javascript 
// type of undefined is undefined in javascript

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof [1,2,3]);//object ,there is no array type in javascript , only object type exists
console.log(Number.MAX_VALUE) //-> depends on interpretor,machine bit (32/64),node's support (32 or 64 bit)
console.log(Number.MAX_SAFE_INTEGER) //->we use this value
console.log(Number.MIN_SAFE_INTEGER)