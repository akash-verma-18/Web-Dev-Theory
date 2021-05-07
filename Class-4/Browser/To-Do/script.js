let input = document.querySelector(".input_box"); // it gives node of DOM   
let ul = document.querySelector(".task-list");
let arr = [];
// 
if (localStorage.getItem("allTask")) { // storage on the browser

    let stringArr = localStorage.getItem("allTask");
    // parse
    arr = JSON.parse(stringArr);

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.innerText = arr[i];
        li.addEventListener("dblclick", function (e) {
            li.remove();
        })
        //  add any attribute 
        li.setAttribute("class", "task");
        ul.appendChild(li);
    }
}
// let li = document.querySelector(".task");
input.addEventListener("keydown", function (e) { // for preesing key on keyboard
    //  e object -> describe -> event keydown
    // console.log(" some key was pressed");
    console.log("event object", e);
    if (e.key == "Enter") {// "key" is a property of object "e" 
        // console.log("user want to enter a task");
        
        let task = input.value; // whatever we have given input in input_box
        // console.log(task);
        let li = document.createElement("li");// create li tag
        li.innerText = task;
        if (localStorage.getItem("allTask")) {

            let stringArr = localStorage.getItem("allTask");
            // parse
            arr = JSON.parse(stringArr);
        }
        arr.push(task)
        // set 
        let stringArr = JSON.stringify(arr);
        //  string
        localStorage.setItem("allTask", stringArr);
        li.addEventListener("dblclick", function (e) {
            li.remove();
        })
        //  add any attribute 
        li.setAttribute("class", "task");
        ul.appendChild(li); // to add li under ul to the browser 
        input.value = "";
    }
});