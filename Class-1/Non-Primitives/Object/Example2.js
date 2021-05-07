let obj={
    0: 10,
    1: 20,
    2: 30,
    3: 40
};
let keys=Object.keys(obj);
for(let i=0;i<keys.length;i++){
    console.log(i,"->",obj[i]);
}