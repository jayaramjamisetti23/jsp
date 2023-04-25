//1.
// window.setTimeout(() => {
//     console.log("settimeout");
// },3000)

// window.setInterval(() =>{
//     console.log("setInterval");
// },5000)


//2.
function demo(m,n){
    setTimeout(() =>{
        for(let i=m;i<=n;i++){
            console.log(i);
        }
    },3000)
}

function message(){
    console.log("numbers printed");
}
demo(0,10);
message();