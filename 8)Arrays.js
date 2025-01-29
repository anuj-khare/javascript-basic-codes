let arr = [1,2,4,"Hello",true,false,{a:10},[11,"hi",true]];
//Array does not need to be homogenous in javascript
console.log(typeof arr);//object
console.log(arr[7])
console.log(arr[6]);

//2dimensional array
let A = [[1,11],[2,22],[3,33]];
console.log(A[2][1])

//converting array values to string
let array1 = [1,2,13,19,91,26,47,53];
console.log(array1.join(" "));

//Slicing and splicing an array
//Slicing does not change the actual array while splicing does.

let B = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(B.slice(4,7));//pick from 4th index until 7th index
console.log(B);//B remains unaffected

console.log(B.splice(4,4));//pick from 4th index and take 4 positions.
console.log(B);//B gets cut and above values get cut from B

//Adding elements to Array
let b = [1,2,3,4];
b[4] = 11;
b[12] = 99;

console.log(b);//you can add an element at any given index,if you're adding item at some non end  place,
//then that much empty slots will be added to array and then the value specified will be added at specified index

//Looping through an Array

let myArray = [1,"Hello",false,true,"myStr",{'a':true,'b':"hellio"}];

for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}

//For-Of Loop
for(let val of myArray){
    console.log(val);
}

//For in loop

for(let index in myArray){
    console.log(myArray[index]);
}

//--------------------------------------------------------------------------------------------------------------------------------------------
let fruits = ["apple","mango"];
fruits.push("kiwi");
console.log(fruits);
fruits.pop();
fruits.push("banana");
fruits.push("cherry")
console.log(fruits);
fruits.shift();//removes the first element of the array
console.log(fruits);
fruits.unshift("coconut","guava");//adds elements to the start
console.log(fruits);

console.log(fruits instanceof Array);
console.log(Array.isArray(fruits));