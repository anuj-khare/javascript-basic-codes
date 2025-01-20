//Objects are first class variables in js,
//you can create objects in javascript without creating class

let obj = {
    a:10,
    b:"hello",
    c:true
}
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log(obj);

//a ,b and c are called properties of object , these can be of primitive type or they can also be of object type
let A = {
    a:"hi",
    b:{
        x:"string",
        y:true
    },
    c:41
}
// console.log(A.b.y);

A.newObject = 123;//this adds a new property in object A.
//javascript differs in this regard with other oops languages like java,c++ in that an object can be added new properties without extending class.
//in java,you have to extend the class and add new property there, but in js you can simply add new property in object
console.log(A);

//all these objects added have public scope,although there are ways you can have private data members using functions

//you can also delete properties of an object using delete keyword

delete A.c;
console.log(A);