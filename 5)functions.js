function myfun(){
    return 100;
}
let x = myfun();
console.log(x);

function sum(x,y){
    return x+y;
}
console.log(sum(10,20));
console.log(sum("add","sui"));//concatenates

function incr(x){
    return x+1;
}
// console.log(incr(11));
// console.log(incr("hello"));
console.log(incr(true));//true gets typecasted to 1
console.log(incr(false));//falsee gets typecasted to 0