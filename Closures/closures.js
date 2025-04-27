// function outer() {
//     let outerVar = "I'm in the outer scope!";
//     console.log("This is outer function");
//     function inner() {
//         console.log(outerVar);
//         console.log("This is inner function now");
//     }
//     return inner;
// }
// const closure = outer(); 
// closure();
const counter = (function () {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log("Counter reset");
        },
    };
})();

counter.increment(); 
counter.increment(); 
counter.reset();

function variableCounter(initialValue,difference){
    //arguments passed in outer functions are also included in closure scope,i.e,wont be destroyed once outer functions has executed
    //since they're being used inside inner function.
    return {
        up() {
            initialValue += difference
            console.log(initialValue);
        },
        down(){
            initialValue -= difference;
            console.log(initialValue)
        }
    }
}

let setUpCustomCounter = variableCounter(27,3);
setUpCustomCounter.up();
setUpCustomCounter.up();
setUpCustomCounter.up();
setUpCustomCounter.down();