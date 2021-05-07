// In JS, functions are treated like variables.
// variable-> assignment  
//  function expression 
// passed as a parameter-> functional programming

function fn(a) {
    console.log(a);
    a();
}
function inner() {
    console.log("Hello I am Inner");
}
fn(inner);