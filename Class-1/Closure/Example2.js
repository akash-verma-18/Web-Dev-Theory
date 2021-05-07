let fName=10;
function printName() {
    console.log(fName);
    console.log("```````````````````````");
    console.log("returning print full Name");
    return function printFullName(lastName) {
        console.log(fName + " " + lastName);
    }
}
let rVal = printName("Steve");

console.log("```````````````````````");
fName=20;
rVal("Rogers");