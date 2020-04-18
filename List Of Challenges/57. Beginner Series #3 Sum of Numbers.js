/* 57. Beginner Series #3 Sum of Numbers

    >Given two integers a and b, which can be positive or negative,
     find the sum of all the numbers between including them too and return it.
     If the two numbers are equal return a or b.
    EXAMPLE:
        GetSum(1, 0) == 1   // 1 + 0 = 1
        GetSum(1, 2) == 3   // 1 + 2 = 3
        GetSum(0, 1) == 1   // 0 + 1 = 1
        GetSum(1, 1) == 1   // 1 Since both are same
        GetSum(-1, 0) == -1 // -1 + 0 = -1
        GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
    NOTES:
        a and b are not ordered!
*/

var a = -1;
var b = 2;


var funzione = getSum(a,b) ;
console.log(funzione);

function getSum(a,b) {
    var min = 0;
    var max = 0;

    if (a == b) {
        return a;
    } else if (a > b) {
        max = a;
        min = b;
    } else {
        min = a;
        max = b;
    }

    var sum = 0;
    for (var i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}
