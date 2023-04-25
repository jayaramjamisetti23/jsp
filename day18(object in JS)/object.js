// //literal way
// console.log("literal way");
// let obj={
//     name:"abhi",
//     id:1,
//     sum : function(a,b)
//     {
//         let c=a+b;
//         return c
//     }
// }
// console.log(obj);
// console.log(obj.sum);
// console.log(obj.sum(10,10));

// // Function Constructor
// console.log("Function constructor");
// function obj1(name,id)
// {
//     this.name= name;
//     this.id=id;
// }

// let obj2 = new obj1("ram",10)
// console.log(obj2);


//methods
console.log("methods");
let obj ={
    name :"ram",
    id : 1
}
console.log(obj);

obj.designation = "Developer"//adding new variable
console.log(obj);

obj.id=10;//updating
console.log(obj);

delete obj.designation//deleting the variable
console.log(obj);

let obj1= Object.keys(obj)
console.log(obj1);

let obj2= Object.values(obj)
console.log(obj2);

let obj3= Object.entries(obj)
console.log(obj3);

let obj4= {
    designation : "developer"
}

let obj5= Object.assign(obj,obj4)
console.log(obj5);

//seal
let obj6= Object.seal(obj)
console.log(obj6);

obj.address = "abc"
console.log(obj);

obj.id=1000
console.log(obj);

//freeze
let obj7= Object.freeze(obj)
console.log(obj7);

obj.lastname="kumar"
console.log(obj);

obj.id=500
console.log(obj);