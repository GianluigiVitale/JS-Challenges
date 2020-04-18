/* 33. SpeedCode #2 - Array Madness
    >Given two integer arrays a, b, both of length >= 1,
     create a program that returns true if the sum of the squares of each
     element in a is strictly greater than the sum of the cubes of each element in b.
    NOTES:
*/

var a = [4,5,6];
var b = [1,2,3];

var funzione = arrayMadness(a, b);
console.log(funzione);

function arrayMadness(a, b) {
    var squareA = 0;
    var squareB = 0;

    for (var i = 0; i < a.length; i++) {
        var squareI = Math.pow(a[i], 2);
        squareA += squareI;
    }
    for (var i = 0; i < b.length; i++) {
        var squareI = Math.pow(b[i], 3);
        squareB += squareI;
    }

    if (squareA > squareB) {
        return true;
    } else {
        return false;
    }
}
