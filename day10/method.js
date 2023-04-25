// let a= document.getElementById("demo")
// console.log(a);
// a.setAttribute("class","demo1")

// let demo=document.links
// console.log(demo)
// console.log(demo[0]);
// demo[0].setAttribute("href","http://www.youtube")

// // Inner html
// document.body.innerHTML+="<h2>hello</h2>"
// document.body.innerHTML+="<ol><li>one</li><li>two</li></ol>"
// document.body.innerHTML=" "
// let a=document.getElementsByTagName("li");
// let b=document.getElementsByTagName("ol");
// let c=document.getElementsByTagName("h2");
// document.body.style.backgroundColor="grey"
// console.log(a);
// a[0].style.color="red"
// a[0].style.backgroundColor="black"
// a[0].style.fontSize="20px"
// a[1].style.color="green"
// a[1].style.backgroundColor="blue"
// a[1].style.fontSize="20px"
// b[0].style.backgroundColor="orange"
// c[0].style.color="white"
// c[0].style.backgroundColor="black"

let p=document.createElement("p")
console.log(p);
p.textContent="hello"
document.body.appendChild(p)

// let ol=document.createElement("ol")
// console.log(ol);
// ol.setAttribute("type","A")
// document.body.appendChild(ol)

// let li1=document.createElement("li")
// console.log(li1);
// li1.textContent="fvtf"
// ol.appendChild("li1")

// let li1=document.createElement("li")
// console.log(li1);
// li1.textContent="fvtf"
// ol.appendChild("li1")

let tab=document.createElement("table")
document.body.appendChild(tab)

let th1=document.createElement("th")
tab.document.appendChild(th1)

let li1=document.createElement("li")
li1.document.textContent="Name"
th1.document.appendChild(li1)

let li2=document.createElement("li")
li2.document.textContent="Branch"
th1.document.appendChild(li2)

let li3=document.createElement("li")
li3.document.textContent="loc"
th1.document.appendChild(li3)


let tr1=document.createElement("tr")
tab.document.body.appendChild(tr1)
