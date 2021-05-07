var varName = 10;
function fn() {
    var varName = 20;
    varName++;
    console.log("59", varName);
    function a() {
        console.log("61", varName);
        var varName = 30;
        console.log("63", varName);
    }
    a();
    console.log("65", varName);

}
console.log("68", varName);
fn();
console.log("70", varName);