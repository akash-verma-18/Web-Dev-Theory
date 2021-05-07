/* json-an object of javascript; is used to store data;"key" should
 be in string;function is not allowed
 To Read a JSON file  
read -> parse*/

let fs = require("fs");
let content = fs.readFileSync("abc.json");
console.log(content+"");

