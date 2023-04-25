//1.Promises

function Demo(m,n){
    return new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {
            if(isNaN(m)||isNaN(n)){
                return reject();
            }
            for(let i=m;i<=n;i++){
                console.log(i);
            }
            return resolve();
        },3000)
    })
}

function message(){
    console.log("numbers printed");
}

Demo(1,'sdd')
.then(message())
.catch(() => console.log("given numbers wrong"))
