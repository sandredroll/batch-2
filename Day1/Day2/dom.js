// let ele=document.getElementsByClassName("test");
// ele[0].style.backgroundColor="dodgerblue"
// console.log(ele);
// console.log(Array.isArray(ele));



// let x=[...ele];
// console.log(x, Array.isArray(x));
// x.map(element=>{
//     element.style.backgroundColor="tomato";
//     element.style.color="white";
    
// })



// let ele1=document.querySelector("#demo");
// console.log(ele1);
// let ele2=document.querySelector(".test");
// console.log(ele2);
// let ele3=document.querySelectorAll(".test");
// console.log(ele3);


// let demo=document.getElementById("demo");
// demo.addEventListener("click",()=>{
//        console.log("button clicked")
//        alert("hi")
//        document.body.style.backgroundColor="orange"
// })
// demo.addEventListener("dblclick",()=>{
//     document.body.style.backgroundColor="pink"
// })



let bgColor=document.querySelectorAll(".bgColor");
[...bgColor].map(element=>{
    element.addEventListener("mouseover", ()=>{
        element.style.backgroundColor=element.innerText;
    });
    element.addEventListener("mouseleave",()=>{
        element.style.backgroundColor="transparent";
    })
})

// let ele4=document.createElement("hi");
// ele4.innerText="dynamic creation of html element";
// ele4.setAttribute("id", "demo")
// console.log(ele4);

// document.body.appendChild(ele4);
// let image=document.createElement("img");
// image.src="./3606208.jpg";
// console.log(image);
// document.body.appendChild(image)




