// object literals
// object -> {key : value} pair

let obj={
    firstname: "Steve",
    lastname: "Rogers",
    age:35,
    // property
    address:{
        city:"Manhatten",
        state: "New York",
    },
    isAvenger:true,
    movies:["Civil War","First Avenger","Avenger"],
    sayHi(){
        console.log("I am a function inside an object");
        return "Value is returned from function sayHi";
    }
};
console.log(obj);
// . operator is used to get from objects
console.log("State Name:" + obj.address.state);
console.log("Favourite movie:" + obj.movies[1]);
console.log(obj.sayHi());

//Square braces
let varName="isAvenger";
console.log("Current state of Captain:" + obj[varName]);
console.log("Key is not present: " + obj.abc);

