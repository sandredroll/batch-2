/*const users=["Shravan","Bhavya","Vrinda","Keshav"]
for(let i=0; i<users.length;i++){
    console.log(users[i])
}

users.map((user)=>{
    //console.log(user);
})

let x=users.map((user)=>{
    //console.log(user);
})
console.log(x);

users.forEach((user)=>{
    return user;
})
console.log()  */

const users=["Shravan","Bhavya","Vrinda","Keshav"];
users.push("Arun")
console.log(users);
users.unshift("mahesh");
console.log(users);
users.shift()
console.log(users);
console.log(users.reverse());
const hobbies=["Playing","Singing","Dancing","Reading"];
console.log(hobbies)
let x=hobbies.join("");
console.log(hobbies[1]);
console.log(users+hobbies);
let UsersHobbies=users.concat(hobbies);
console.log(UsersHobbies);
