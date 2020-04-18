/* 43. Expressions Matter

    >Given three integers a ,b ,c, return the largest number obtained after inserting the
     following operators and brackets: +, *, ()
     In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
    Notes:  The numbers are always positive.
            The numbers are in the range (1  ≤  a, b, c  ≤  10).
            You can use the same operation more than once.
            It's not necessary to place all the signs and brackets.
            Repetition in numbers may occur .
            You cannot swap the operands. For instance, in the example below you cannot get expression (1 + 3) * 2 = 8.
    Example:
    With the numbers 1, 2 and 3 , here are some ways of placing signs and brackets:
        1 * (2 + 3) = 5
        1 * 2 * 3 = 6
        1 + 2 * 3 = 7
        (1 + 2) * 3 = 9
    So the maximum value that you can obtain is 9.
*/

var a = 1;
var b = 2;
var c = 3;


var funzione = expressionMatter(a, b, c);
console.log(funzione);

function expressionMatter(a, b, c) {
    var combination1 = a + b + c;
    var combination2 = a * b * c;
    var combination3 = a * b + c;
    var combination4 = a + b * c;
    var combination5 = a * (b + c);
    var combination6 = (a + b) * c;

    var maxNumber = Math.max(
        combination1,
        combination2,
        combination3,
        combination4,
        combination5,
        combination6,
    );
    return maxNumber;
}
