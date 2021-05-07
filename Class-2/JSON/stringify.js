let fs=require("fs");
let content = fs.readFileSync("abc.json");
let json = JSON.parse(content);
json.push({
    "name": "krish",
    "lastName": "jain",
    "age": 25,
    "address": {
        "state": "Delhi",
        "city": "delhi"
    }
})

// JSon stringify -> To push data in a json file

fs.writeFileSync("abc.json", JSON.stringify(json));
console.log(json[1].name);
console.log("file written to disk");