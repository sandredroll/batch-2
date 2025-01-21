/*

let users=["sanjay","manoj","srivalli","pankaj"];
users.map((user,i)=>{
    console.log(user,i);
})

let p=users.map((user,i)=>{
    return user;
});
 console.log(p);

let q=users.forEach((user,i)=>{
    console.log(user);
    return user;
});
console.log(q);

//!nested objects
let userdetails={
    name:"sandhya",
    age:20,
    address:{
        city:"mumbai",
        state:"Maharastra",
        pincode:{
            pin1:123,
            pin2:345
        }

    }
    
}
console.log(userdetails);
console.log(userdetails.name);
console.log(userdetails.address.city);
console.log(userdetails.address.pincode.pin2);

// ! create array of objects

let user1={
    name:"Pranay",
    city:"Mumbai"
}
let user2={
    name:"Akshay",
    city:"Chennai"
}
let user3={
    name:"Deepa",
    city:"Mumbai"
}
let user4={
    name:"Ranvi",
    city:"Singapor"
}
let user5={
    name:"Asha",
    city:"vadodra"
}

console.log(user1.name);
console.log(user2.name);

let userDetails=[
    {
        name:"Pranay",
        city:"Mumbai"
    },
    {
        name:"Akshay",
        city:"Chennai"
    },
    {
        name:"Deepa",
        city:"Mumbai"
    },
    {
        name:"Ranvi",
        city:"Singapor"
    },
    {
        name:"Asha",
        city:"vadodra"
    }

];
userDetails.map((user)=>{
    console.log(user.name);
    console.log(user.city)
})         */


let userData={
    name:"satwik",
    age:25,
    city:"karimnagar"
};
console.log(userData,typeof(userData))
console.log(userData.name,typeof(userData));

let x=JSON.stringify(userData);
console.log(x, typeof(x));

let y=JSON.parse(x);
console.log(y);


