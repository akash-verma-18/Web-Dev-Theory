/*inner function has access to all the variables of outer function, 
even if the outer function is removed from the stack*/
// callback function is based on the property of closure.

let a=10;
function getFirstName(FirstName) {
    console.log("Hello", FirstName);
    function fn(){
        console.log("I am outer but you can call me");
    }
    return function getFullName(lastName) { // it is an inner function and it makes a closure over variable of outer function
        console.log("Hello ", FirstName, " ", lastName," ",a);
        fn();
    }
}
let rVal = getFirstName("Steve");
console.log("`````````````````````````````");
rVal("Rogers"); // it is able to access Steve of outer function bcz of closure property.
rVal("Rogers");
