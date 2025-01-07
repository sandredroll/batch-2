/* Finding Greatest number amogst the the three numbers using else if ladder.
let a=prompt("Enter the num1 valu:");
let b=prompt("Enter the num2 valu:");
let c=prompt("Enter the num3 valu:");
if(a>=b && a>=c){
    console.log(a + "is the greatest number.");
}
 else if(b>=a && b>=c){
    console.log(b +  "is the greatest number.");
 }
 else if(c>=a && c>=b){
    console.log(c + " is the largest number.");
 }
else{
    console.log("Invalid Number");
}
               */

//Finding Greatest number amogst the the three numbers using switch cases
let a=Number(prompt("Enter the num1 value: "));
let b=parseInt(prompt("Enter the num2 value: "));
let c=Number(prompt("Enter the num3 value: "));
switch (true) {
    case a>=b && a>=c:
        console.log(a+" "+" is the greatest value.")
    break;
    case b>=a && b>=c:
        console.log(b + " is the greatest value.")
    break;
    case c>=a && c>=b:
        console.log(c + " is the greatest value.")
    break;

    default:
        console.log("Invalid Number.")
        break;
}


