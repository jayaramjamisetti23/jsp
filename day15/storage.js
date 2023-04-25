// window.localStorage.setItem("name","ram")
// console.log(window.localStorage.getItem("name"));

// window.sessionStorage.setItem("name","abhi")
// console.log(sessionStorage.getItem("name"));

//1.Task
let form =window.document.getElementById("form");
console.log(form);

let submit=window.document.getElementById("submit");
console.log(submit);

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value
    console.log(name);
    let password=document.getElementById("password").value
    console.log(password);
    window.localStorage.setItem(name,password)
})

//2cookies
let user= document.cookie="username =abhi"
console.log(user);