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
let slicedArr=arr.slice(2,5);
console.log("Sliced Array:" + slicedArr);
console.log("Array:" + arr );
