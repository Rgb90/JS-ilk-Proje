function clickCounter() {
    {
     if (sessionStorage.clickcount) {
       sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
     } else {
       sessionStorage.clickcount = 1;
     }
     document.getElementById("result").innerHTML = sessionStorage.clickcount;
   } 
 }
 