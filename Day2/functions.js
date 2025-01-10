// without parameters
function demo(a,b){
    console.log("function is working.")
    console.log(a+b);
}
demo(5,6);

//functions with parameters using implicit and explicit rerturns
function test1(a,b){
    console.log("printing before return keyword");
    return a+b;
    console.log("printing after return key word");
}
console.log(test1(5,5));

let x=(a,b) => {return a*b};
console.log(x(5,5));

let y=(a,b) => a+b;
console.log(y(100,200));


