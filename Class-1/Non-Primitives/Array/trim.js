let string="      Hello! How are you?     ";
console.log("Original string:" + string);
let trimmedStr=string.trim();
console.log("Trimmed string:" + trimmedStr);
let strArr=trimmedStr.split(" ");
console.log("string Arr:" + strArr);
let joinedString=strArr.join("+");
console.log("Joined string:" + joinedString);
