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

