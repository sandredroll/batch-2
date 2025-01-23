// API FEtching
/*
function fetchusers(){
    let response=fetch("https://jsonplaceholder.typicode.com/users");
    //console.log(response)
    response.then(res=>{
        //console.log(res)
        //console.log(res.json)
        return res.json().then(data=>{
            // console.log(data);
            let store=document.getElementById("store");
            data.map(user=>{
                console.log(user);
                store.innerHTML+=`
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                </tr>
                
                `
            })
        })

    })
    .catch(err=>console.log(err))
}
fetchusers();     */


// async and await
// function Demo(){
//     console.log("start");
//     console.log(10);
//     console.log(20);
//     return;
//     console.log(50);

// }
// Demo();

/*
let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success")
    }, 4000);
});
console.log(p)



async function demo(){
   console.log("start");
   let x=await p;
   console.log(x);
   console.log("end");
}
demo();
  */


async function fetchUsers() {
 let response=await fetch("https://jsonplaceholder.typicode.com/users");
 let data=await response.json();
 console.log(data);    
}
fetchUsers()