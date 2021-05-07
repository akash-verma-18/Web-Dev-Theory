// We can't assign more than 1 function to the same variable name.

let fn=function fn1(){
    console.log("Hello");
}
let fn=function fn2(){
    console.log("I am duplicate");
}
fn();
