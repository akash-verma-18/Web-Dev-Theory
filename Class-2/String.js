// Strings
// immutable
let varName = 10;
let a = 'I am single quotes string ' + varName + " after";
let b = "I am double quotes " + varName + " after";
console.log("single", a);
console.log("double", b);
// template string
// multiline string
let c = `I am back ${varName} ${a} tick string`;
console.log("template", c);