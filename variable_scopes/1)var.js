var x = 10;
//var is global scoped here

function incr(){
    //var is function scoped here
    var x = 20;
    x++;
    console.log(x);//21
}
incr();
console.log(x);//10

//Note : Read this article to get proper understanding of the difference between let,var and const
//https://www.freecodecamp.org/news/differences-between-var-let-const-javascript/
