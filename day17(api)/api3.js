window.fetch("https://fakestoreapi.com/products")
.then((x) => x.json())
.then((x) =>{
    console.log(x);
x.map((x) =>{
    console.log(x);
    let demo=document.getElementById("demo")
    console.log(demo);
    let table=""
    table+=`
    <tr>
    <td>${}</td>
    <td>${}</td>
    <td>${}</td>
    <td>${}</td>
    `



})
})