// return a fn from a fn
function outer() {
    console.log("Inside outer");
    console.log("returning inner");
    return function inner() {
        console.log("I am Inner");
    }
}

 let rVal=outer();
  console.log(rVal);
rVal();