let str = "Asdfafae";
//Strings are immutable in js,can be reassigned but string literal cant be changed
//All the operations like substr,replace etc return new strings

str.indexOf("a") // first occurence of a
str.indexOf("a",4) // first occurence of a after 4th index

str.substr(3,5);//cut from 3rd index and take 5 positions
str.substring(3,6);//cut from 3rd to 6th index

str.slice(4,5);//ekdum similar to substring except slice works with negative values as well and last index is -1
//1:51:33

