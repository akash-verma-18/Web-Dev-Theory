/* memory is not allocated to function expression-so a function should be called 
after function expression*/

 console.log(fnexp);
 //fnexp(); - it will give an error

var fnexp=function (){
    console.log("I am expression")
}
fnexp();