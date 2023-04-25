window.fetch("https://corona.lmao.ninja/v2/countries")
.then((x) => x.json())
.then((x) => {
    console.log(x);
x.map(x =>{
    console.log(x);
    let demo=document.getElementById("demo")
    console.log(demo);
    let table =""
    table +=`
    <tr>
    <td>${x.action}</td>
    <td>${x.actionPerOneMillion}</td>
    <td>${x.cases}</td>
    <td>${x.actionPerOneMillion}</td>
    <td>${x.continent}</td>
    <td>${x.country}</td>    
    </tr>
    `
    demo.innerHTML +=table
})
})