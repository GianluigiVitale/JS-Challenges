/* 21. Equal sign
    >Create a function that return true if n1 and n2 > 0 or if n1 and n2 < 0 or if n1 and n2 = 0 else
     return false
*/

var n1 = -2;
var n2 = 6;

var funzione = both(n1, n2);
console.log(funzione)

function both(n1, n2) {
    if ((n1 > 0 && n2 > 0) || (n1 < 0 && n2 < 0) || (n1 == 0 && n2 == 0)) {
        return true;
    } else {
        return false;
    }
}
