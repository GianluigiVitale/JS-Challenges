/* 31. Is n divisible by x and y?
    >Create a function that checks if a number n is divisible by two numbers x AND y.
     All inputs are positive, non-zero digits.
    NOTES:
*/

var n = 3;
var x = 3;
var y = 4;

var funzione = isDivisible(n, x, y);
console.log(funzione);

function isDivisible(n, x, y) {
    if ((n % x == 0) && (n % y == 0)) {
        return true;
    } else {
        return false;
    }
}
