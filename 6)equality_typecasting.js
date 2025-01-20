// == is non strict equality operator
//if left can be typecasted to right or right can be typecasted to left ,it does that and then tries to compare.

console.log(1=="1");//true

// === is called strict equality operator
// it checks for two things : 
// i) type equality
// ii) value equality
//so it doesnt typecast left to right or right to left
console.log(1==="1");//false

// some random checks : 

console.log((1+"1") == 11);//true
console.log(("11"-1)==1);//false,bcz "11"-1 evaluates to 10
/*
Note : In javascript,when you do subtraction from a string , string in converted to integer.same concept applies to multiplication and division.
however,for addition,this is not the case as in (string + integer) , integer gets converted to string and simple concatenation occurs 
*/
console.log([] == "");
console.log([] == 0);
console.log(0 =="");
//string can be typecasted to zero and [] can also be typecasted to 0

console.log({} + []);
console.log([] + {});

//Unary operator

//+ right pr aane wale sbhi ko integer mei convert krne ki koshish krega
// so +[] becomes 0
console.log(+[]);
console.log(+{});
// refer to mdn docs on equality and sameness for more depth on which datatype can be converted to which 