/*
Variables declared with let can have a global, local, or block scope.
Block scope is for variables declared in a block.
*/

/*
Note : You can redeclare a variable using var but redeclaring a variable using let is not allowed
    ex : 
        i) var a = 10;
           var a = 20; allowed
        ii) let a1 = 10;
            let a1 = 20;throws error
*/

let number =50; //Global Scope
function print(){
    let square = number * number;//function scoped
    if(number <60){
        var largeNumber = 80;//function scoped
        let anotherLargeNumber = 100;//block scoped
        console.log(square);
    }
    console.log(largeNumber);//accessible outside of if block and inside print function
    console.log(anotherLargeNumber);//not accessible outside of if block and will Throw error
}
print();
// console.log(number);

/*Note : In terms of scoping,const is also global,function or block scoped.so const behaves fully like let.
         The only difference lies in redeclaring and reassignment : const allows neither.
*/