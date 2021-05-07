
//  you can also assign address of a function to  a variable;
// JS treats functions also  as a variable

// function expression
let fnaddressHolder = function () {
    console.log("I am expression");
    return 10;
}
console.log(fnaddressHolder + "");
let rval = fnaddressHolder();
console.log(rval);

