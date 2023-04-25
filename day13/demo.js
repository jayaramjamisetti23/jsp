// grand-parent
let grand_parent = document.getElementById("grand_parent");
console.log(grand_parent);

grand_parent.addEventListener("click", (e) => {
    e.target.style.backgroundColor="red"
    e.stopPropagation();
    console.log("grand_parent clicked..!");
},false)

// parent
let parent = document.getElementById("parent");
console.log(parent);

parent.addEventListener("click", (e) => {
    e.target.style.backgroundColor="yellow"
    e.stopPropagation();
    console.log("parent clicked..!");
},false)
// child

let child = document.getElementById("child");
console.log(child);

child.addEventListener("click", (e) => {
    e.target.style.backgroundColor="black"
    e.stopPropagation();
    console.log("child clicked..!");
},false)