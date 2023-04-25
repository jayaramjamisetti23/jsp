// //1.
// window.open("url");//open the url
// location.reload();//reload the page
// history.go//it goes to the previous history
// window.alert//pop-up box

//2. Screen - Share method 
let demo=document.getElementById("demo");// or document.querySelector("#demo")
console.log(demo);

// console.log(window.navigator.mediaDevices);
// console.log(window.navigator.mediaDevices.getDisplayMedia());
demo.onclick=function()
{
    window.navigator.mediaDevices.getDisplayMedia()   
}


//3.Geo- Location
console.log("3.Geo-Location");
function geo_location()
{
    window.navigator.geolocation.getCurrentPosition((position) => {
        let {latitude,longitude}=position.coords;//obj des
        console.log(latitude, longitude);
        let url=`https://www.google.com/maps/place/${latitude},${longitude}`
        console.log(url);
    })
}
geo_location();

// console.log(window.navigator.geolocation.getCurrentPosition());//get error

//4. Text - Speech converter
console.log("4.Speech converter");
let textarea=document.getElementById("textarea")
console.log(textarea);
let demo1=document.getElementById("demo1");
console.log(demo1);

let speech=new SpeechSynthesisUtterance;
console.log(speech);

demo1.onclick=function()
{
    console.log(textarea.value);
    speech.text=textarea.value;
    speechSynthesis.speak(speech);
}

//5.IF it is connected to Internet or Not//
console.log("5.if it is ONLINE/OFFLINE");

if(navigator.onLine)
{
    document.write("ON-LINE...!");
}
else
{
    document.write("OFF-LINE...!")
}

//6.
//6.1
let video=document.getElementsById("video");
console.log(video);

video.onclick=function()
{
    let playorpause=video.classList.toggle("play")
    if(playorpause){
        video.play();
    }
    else{
        video.pause();
    }
}
//6.2
let demo2=document.getElementById("demo2")
console.log(demo2);

demo2.onclick=function(){
    let playorpause = video.classList.toggle("play");
    if(playorpause){
        video.play();
        demo2.textContent="play"
    }
    else{
        video.pause();
        demo2.textContent="pause"
    }
}



