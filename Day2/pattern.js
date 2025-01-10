/*
let n=Number(prompt("Enter n value: "))
for(let i=1; i<=n; i++)
{
    for(let j=1; j<=n; j++)
    {
        document.writeln("*")
    }
    document.writeln("<br>")
 }

 */

/* Left right triangle
for(let i=1; i<=5; i++){     
    for(j=1; j<=5; j++){
        if(i>=j){
            document.writeln("*");
        }
     }
    document.writeln("<br>")
    
}
    */

/*
for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        if(i==j || i+j==6 ){
            document.writeln("*")
        }
        else{
            document.writeln("&nbsp;&nbsp;&nbsp;&nbsp")
        }
    }
    document.writeln("<br>")
}
*/

//Right triangle
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
        document.writeln("&nbsp;&nbsp;");
    }
    for (let k = 1; k <= i; k++) {
        document.writeln("*");
    }
    document.writeln("<br>");
}


