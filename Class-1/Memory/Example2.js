//hoisting means memory allcation
//memory is allocated to function statement-function will be created in heap
fn();
function fn() {
    console.log("Hello from fn");
}
fn();