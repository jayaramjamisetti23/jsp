window.fetch("data2.json")
.then((x) => x.json())
.then((x) =>{
    console.log(x);
x.map((x) =>{
    console.log(x);

//option variable contain country details
let option=""
    option +=`
    <option value=${x.country}>${x.country}</option>
    `

// first-open with default value
let select =document.getElementById("select")
console.log(select);
    select.innerHTML +=option

// second-open in dropdown box
let datalist=document.getElementById("datalist")
console.log(datalist);
    datalist.innerHTML +=option;
})
})
