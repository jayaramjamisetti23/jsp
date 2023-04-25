// //arrow function
// let demo=()=> console.log('hello');
// console.log(demo);
// console.log(demo());

// //implict array function
// let demoi=()=> console.log('helli imo')
// console.log(demoi);
// console.log(demoi());

// //explict array function
// let demoe=() =>{
//     return 'hello exp'
// }
// console.log(demoe);
// console.log(demoe());

// //ex
// let demon=(a,b)=>{
// let c=a+b;
// console.log(c);
// }
// let a=Number(prompt("Enter A value : "))
// let b=Number(prompt("Enter B value : "))
// //console.log("A + B : "+demon(a,b));
// demon(a,b)

//this key word
console.log(window);
console.log(this);

var a=10;
console.log(window.a);
console.log(this.a);

var a=200;
function demo(){
    let a=100;
    console.log(a);
    console.log(this.a);
}
demo();
