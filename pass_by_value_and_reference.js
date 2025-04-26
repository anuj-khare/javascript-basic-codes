let winner = "Anuj Khare";

function changeWinner(winner){
    winner = "Some Random New Winner";
}

console.log("Original Winner: " + winner);

changeWinner(winner);

console.log("Updated Winner: "+winner);


/*
i) In Javascript,Primitives are passed by value and so are objects.
   Meaning basic data types like string,numbers will be passed by value,but if you pass
   an object into a function,any changes you make to the variable inside that function will also
   be reflected outside the function scope

   When you assign an object to a variable or pass it to a function, you are copying the reference (the memory address), not duplicating the actual object itself.
   Both the original and the copy refer to the same object in memory.
   So if you change the object using either the original variable or the copy, the change is visible everywhere.
*/


let myObj = {
    a:1,
    b:true,
    c:"Tyre"
}


function changeMyObj(passedObject){
    passedObject.d = "Hello",
    passedObject.e = "No Hello"
    //passedObject = {a1:1,b1:2};
}

console.log(myObj);
changeMyObj(myObj);
console.log(myObj)


//changing original object will be reflected but if you re-assign the object,that wont change the original object.