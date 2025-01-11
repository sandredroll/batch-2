//higher order functions

function hof(a){
    return a;
}
let x=hof(function(){return "callback function"});
console.log(x);

let y=function(){return "callback functions"};
console.log(y());

let users=["satish","keshav","vashist"];
console.log(users);
users.map(function(user){console.log(user)}) //iteraton of users
// users.map((user)=>{
//   console.log(user);
// })


let a=10;
let b=50;
function z(){
  let user="Akash";
  let company="google";
  let sala=12340;
  console.log(user);
  console.log(company);
  console.log(sala);
  console.log(a,b)
}
z();
//console.log(z());   with solution also prints undefinied

