function clickCounter() {
  {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
      sessionStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = sessionStorage.clickcount;
  }
}

/* iki farklı sayaç */

let counter = 0;

function myFunction() {
    counter ++;
    document.getElementById("counter").innerHTML = counter;
}

/* sadece bu şekilde de oluyor; 
let counter = 0;
function myFunction() {
    document.getElementById("counter").innerHTML  ++;
} */


/* const password = prompt("parola");
const passwordConfirmation = prompt("tekrar girin");

const passwordsDidNotMatch = password != passwordConfirmation;

if (passwordsDidNotMatch) {
  alert("Parola uyşumadı");
}
  else {
    console.log("Geçerli parola");
  }

 */