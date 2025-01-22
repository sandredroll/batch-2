/*

console.log(10);
console.log(20);
console.log(30);
//console.Log(40)   gives error and doesn't execute the rest lines
setTimeout(()=>{    // even  there is error the other tasks are executed as 
    console.Log(40);   //this method says that execute the next lines 
}, 5000)                
setTimeout(()=>{     
    console.log(40);   
}, 5000) 

// setInterval(()=>{                      
//     // console.log("setInterval");
//     document.writeln("MRU");
// },15000 )
console.log(50)

*/

// Promise
let p1=new Promise((resolve, reject)=> {})
console.log(p1);

let p2=new Promise((resolve,reject)=>{
    resolve("Success");
});
console.log(p2);
p2.then((res)=>{
    console.log(res);

}).catch(err=>console.log(err))
.finally(()=>console.log("final"))


let p3=new Promise((resolve,reject) => {
    reject("Failure");
});
p3.
then(res=>console.log(res)).
catch(err=>console.log(err)).
finally(()=>console.log("final"))       


