//Closure
function x(){
    let a=10;
    const b=20;
    console.log(a,b);
    function y(){
      let p='JS'
      var q="ReactJs";
      console.log(p,q);
      function z(){
        const UserN="Anand";
        console.log(UserN);
        console.log(a);
        console.log(q);
   }
      z(); }
    y();
  }
  x();