// arguments -> pre es6
function varParam(param) {

    console.log(arguments[0]);
    console.log(arguments["0"]);
    console.log(arguments[1]);
    console.log(param)
}
varParam();
varParam("ab");
varParam("a", "b");