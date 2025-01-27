// let h1=document.createElement("h1");
// h1.innerText="dynamic creation of elementsS"
// // h1.id="demo"
// h1.setAttribute("id","demo")
// console.log(h1);

// document.body.appendChild(h1);

// let image=document.createElement("img");
// image.src="./3606208.jpg";
// console.log(image)
// document.body.appendChild(image)


/*
let mainEle=document.createElement("div");
// mainEle.innerText="main";
mainEle.setAttribute("id","mainblock");
console.log(mainEle);

let topEle=document.createElement("div");
topEle.setAttribute("class", "topBlock");
// console.log(topEle);

let image=document.createElement("img");
image.src="https://cdn.pixabay.com/photo/2021/06/14/22/46/milky-way-6337038_1280.jpg";
image.width="300";
image.height="300";
image.style.objectFit="cover"

let bottomEle=document.createElement("div");
bottomEle.setAttribute("class","bottomBlock");
//console.log(bottonEle)
let h1=document.createElement("h1");
h1.innerText="Galaxy";

let btn=document.createElement("button");
btn.innerText="View More" 


bottomEle.appendChild(h1);
bottomEle.appendChild(btn);
topEle.appendChild(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);

document.body.appendChild(mainEle)     */


let form=document.querySelector("form");
let username=document.getElementById("uName");
let password=document.getElementById("uPass");

let gender=document.getElementsByName("gender");
// console.log(gender)

form.addEventListener("submit", event=>{
    event.preventDefault();
    // console.log(username.value)
    let un=username.value;
    let up=password.value;
    let gen="";

    for(let i=0; i<=gender.length-1;i++){
        // console.log(gender[i].value)
    //    console.log(gender[i].checked)    
        if(gender[i].checked==true){
            // console.log(gender[i].value)
            gen+=gender[i].value;
        }    
}
let userDetails={
    username:un,
    password:up,
    gender:gen
}
// console.log(userDetails);
sessionStorage.setItem("userData", JSON.stringify(userDetails))
})