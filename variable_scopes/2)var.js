var x=10;
function incr(){
    var x = 20;
    x++;
    console.log("line 5 "+x);//21
    if(true){
        var x = 30;
        x++;
        console.log("line 9 "+ x);//31
    }
    /*
    Note : The if block does not create a new scope for the x variable because var is function-scoped.
    The x inside the if block is the same as the x declared at the beginning of the incr function.
    When you set x = 30 inside the if, it overwrites the local x, 
    and the value persists outside the block, resulting in 31 being printed on Line 11.
    */
    console.log("line 11 "+x);//31 
}
incr();
console.log("line 13 "+ x);//10

//Note : variables declared with var can have local or global scope.If they are declared inside a function,
// then their scope becomes local.Else ,if they are declared outside a function , then their scope becomes global.
