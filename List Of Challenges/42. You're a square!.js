/* 42. You're a square!

    >Given an integral number, determine if it's a square number:
    Notes:  In mathematics, a square number or perfect square is an integer that is the square of an integer;
            in other words, it is the product of some integer with itself.
            -The tests will always use some integral number, so don't worry about that in dynamic typed languages.
      Example:
            isSquare(-1) returns  false
            isSquare(0) returns   true
            isSquare(3) returns   false
            isSquare(4) returns   true
            isSquare(25) returns  true
            isSquare(26) returns  false
*/

var n = 26;


var funzione = isSquare(n);
console.log(funzione);

function isSquare(n) {
    var sqrtN = Math.sqrt(n)

    if (Number.isInteger(sqrtN)) {
        return true;
    } else {
        return false;
    }
}
