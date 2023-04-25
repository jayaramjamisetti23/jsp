//gp
let grand_parent = document.getElementById("grand_parent");
console.log(grand_parent);

grand_parent.addEventListener("click", (e) => {
    e.target.style.backgroundColor="red"
    e.stopPropagation();
    console.log("grand_parent clicked..!");
},false)

//p1
let parent1 = document.getElementById("parent1");
console.log(parent1);

parent1.addEventListener("click", (e) => {
    e.target.style.backgroundColor="blue"
    e.stopPropagation();
    console.log("parent1 clicked..!");
},false)

//p2
let parent2 = document.getElementById("parent2");
console.log(parent2);

parent2.addEventListener("click", (e) => {
    e.target.style.backgroundColor="orange"
    e.stopPropagation();
    console.log("parent2 clicked..!");
},false)

//child1
let child = document.getElementById("child");
console.log(child);

child.addEventListener("click", (e) => {
    e.target.style.backgroundColor="black"
    e.stopPropagation();
    console.log("child clicked..!");
},false)


//p2
//gp1
let grand_parent1 = document.getElementById("grand_parent1");
console.log(grand_parent1);

grand_parent1.addEventListener("click", (e) => {
    e.target.style.backgroundColor="aqua"
    e.stopPropagation();
    console.log("grand_parent1 clicked..!");
},false)

//p11
let parent11 = document.getElementById("parent11");
console.log(parent11);

parent11.addEventListener("click", (e) => {
    e.target.style.backgroundColor="yellow"
    e.stopPropagation();
    console.log("parent11 clicked..!");
},false)

//p12
let parent12 = document.getElementById("parent12");
console.log(parent12);

parent12.addEventListener("click", (e) => {
    e.target.style.backgroundColor="green"
    e.stopPropagation();
    console.log("parent12 clicked..!");
},false)

//ch11
let child11 = document.getElementById("child11");
console.log(child11);

child11.addEventListener("click", (e) => {
    e.target.style.backgroundColor="violet"
    e.stopPropagation();
    console.log("child11 clicked..!");
},false)
//ch12
let child12 = document.getElementById("child12");
console.log(child12);

child12.addEventListener("click", (e) => {
    e.target.style.backgroundColor="grey"
    e.stopPropagation();
    console.log("child12 clicked..!");
},false)
