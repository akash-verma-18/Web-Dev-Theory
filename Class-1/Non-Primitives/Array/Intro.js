// In JS, array is a collection of homogeneous/heterogeneous data types.

let arr=[
    1,
    1.1,
    null,
    true,
    "string",
    [1,2,3,4,5],
    function sayHi(){
        console.log("I am a function inside an array");
        return "Value returned from a function";
    }
];

console.log(arr);
console.log(arr[3]);
console.log(arr[5][3]);
console.log(arr[arr.length-1]);
console.log(arr[arr.length-1][3]);
arr[arr.length-1]();
console.log(arr[arr.length-1]());
