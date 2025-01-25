var number = 10;

function print(){
    let square = number * number;
    console.log("inside function\n"+square)
}

print();
console.log(square);//ReferenceError: square is not defined

function print() {
    var square1 = number * number
    console.log(square1)
  
    var number = 50
  
    var square2 = number * number
    console.log(square2)
  }
  
  print()