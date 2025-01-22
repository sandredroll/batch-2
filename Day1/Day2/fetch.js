// API FEtching
function fetchusers(){
    let response=fetch("https://jsonplaceholder.typicode.com/users");
    //console.log(response)
    response.then(res=>{
        return res.json().then(data=>{
            console.log(data);
        })

    })
    .catch(err=>console.log(err))
}
fetchusers();