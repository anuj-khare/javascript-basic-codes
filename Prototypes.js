const myDate = new Date();
let object = myDate;
let i = 0;
do {
  console.log("object",object);
  object = Object.getPrototypeOf(object);
  console.log("prototype")
  console.log(object);
} while (object);

/*
i) Prototypes are the mechanism by which JavaScript objects inherit features from one another
ii)Every object in JavaScript has a built-in property, which is called its prototype.
   The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. 
   The chain ends when we reach a prototype that has null for its own prototype.
iii) When you try to access a property of an object: 
     if the property can't be found in the object itself, the prototype is searched for the property.
     If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found,
     or the end of the chain is reached, in which case undefined is returned.
*/

let a  = {
    1:2,
    2:3,
    "Anuj":"Hi"
}

console.log(Object.getPrototypeOf(a))
console.log(Object.getPrototypeOf(a) === null); 
console.log(a.hasOwnProperty);