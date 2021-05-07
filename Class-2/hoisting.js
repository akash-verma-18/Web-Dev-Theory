/* hoisting means memory allcation
 memory is allocated to variable declaration and
function statement-function will be created in heap*/

console.log("a", a);
var a;
console.log("a", a);
a = 10;
console.log("a", a);
hello();
function hello() {
    console.log("Hello all");
}
hello();
console.log("varname",varName);
//varName(); -> error
// function expression
var varName = function () {
    console.log("i am expression");
}

varName();
// console.log(b); ->error(can't access variable before initialization)

 let b = 10;
 console.log(b);