// let a=10;
// console.log(a);//10
// console.log(typeof a);//number
// console.log(typeof .5);//number
// console.log(typeof -10);//number
// console.log(typeof -.5);//number


// //string
// let str='i am a m'
// console.log(str);
// console.log(typeof str);

// let str1="i'm a m"
// console.log(str1);
// console.log(typeof str1);

// //backtic(``)
// let str2=`i
//  am
//  jay `
// console.log(str2);
// console.log(typeof str2);

// //un-defined
// let str3;
// console.log(str3);

// //null
// let m=null;
// console.log(m);//null
// console.log(typeof m);//oblect

// //boolean
// console.log(typeof true);//boolean
// console.log(typeof false);//boolean

// //big-int
// let n=1n;
// console.log(n);//1n
// console.log(typeof n);//big-int

//primitive datatype
var a=10;
console.log(a);//10

var b=a;
var c='jay'
console.log(b);//10

var a='hello';
console.log(c);
console.log(a);//hello
console.log(b);//10
var b=a;
console.log(b);

//Non-primitive datatype//
let obj={
    name:'ram',
    id :100,
    phono :7534678
}
console.log(obj);
let obj1=obj;
console.log(obj1);
obj1.id=1;
console.log(obj1);
console.log(obj);

let z={
    name :'jayaram',
    roolno :1234,
    qual :'btech',
    brch :'ece'
}
console.log(z);
let z1=z;
z1.name='jai';
z1.roolno=1;
z1.qual=null;
z1.brch='e';
console.log(z);
console.log(z1);
