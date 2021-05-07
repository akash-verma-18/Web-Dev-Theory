/* When we have more than 1 function with the same name, and when we call 
that function, the latest function will run*/

function fn(){
    console.log("Hello");
}
function fn(){
    console.log("I am fake");
}
fn();