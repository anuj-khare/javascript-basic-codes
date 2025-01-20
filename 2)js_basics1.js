let i = 20;
for(let i=0;i<10;i++){
    console.log(i);
}

console.log("now printing in a single line")
let result = "";
for(let i=0;i<10;i++){
    if(i==9){
        result += i;
        break;
    }
    result += i+" -> ";
}
console.log(result);