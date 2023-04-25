// document.write("hello")
// document.writeln("hello")
// document.writeln("hello")
// document.writeln("hello")

// console.log(typeof document);
// console.log(document);
// console.dir(document);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// document.title="flipkart";
// console.log(document.body);
// document.body.style.backgroundColor="red";

console.log(document.links);

let links=document.links;
console.log(links);

for(let i=0;i<links.length;i++)
{
    console.log(links[i]);
    links[i].className="demo"
}

//image
let img=document.images
console.log(img);

for(let i=0;i<img.length;i++){
    console.log(img[i]);
    img[i].className="demo1"
    img[i].style.height="200px"
    img[i].style.width="200px"
    img[i].style.borderRadius="100%"

}
//form

let input=document.input
console.log(input);
for(let i=0;i<input.length;i++){
    console.log(input[i]);
    input[i]=prompt()
    
}