function fName(param){
    console.log("param is:" + param);
    let result=Math.random() > 0.5 ? "Say Hi" : false;
    return result;
}
fName(10);
console.log("-------------------------------");
let result=fName([1,2,3,4,5]);
console.log("Returned value is:" + result);
console.log("-------------------------------");
result=fName("Hello");
console.log("Returned value is:" + result);