let arr=[
    1,
    1.1,
    10,
    true,
    "string",
    [1,2,3,4,5],
    function sayHi(){
        console.log("I am a function inside an array");
        return "Value returned from a function";
    }
];
//let delElemArr=arr.splice(3,5);
let delElemArr=arr.splice(3);
console.log("Deleted Element of Array:" + delElemArr);
console.log("Array:" + arr );
