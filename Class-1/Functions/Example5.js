
function outer() {

    console.log("I am outer");
    console.log("returning inner");
    return function inner() {
        console.log("Hello I am Inner");
    }
}
let rVal = outer();
console.log(rVal);
rVal();