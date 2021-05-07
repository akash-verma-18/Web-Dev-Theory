/*global execution context(gec)-hidden main function
first memory is allocated to all variables and function statements,
then the program is executed from top to bottom.
A new execution context is formed when a function is called*/

// Memory is allocated when a varibale is declared

console.log(varName);
var varName;
console.log(varName);
varName = 10;
console.log(varName);