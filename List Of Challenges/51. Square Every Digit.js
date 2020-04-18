/* 51. Square Every Digit

    >Welcome. In this kata, you are asked to square every digit of a number.
    EXAMPLE:
        For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
    NOTES:
        The function accepts an integer and returns an integer
*/

var num = 9119;


var funzione = squareDigits(num);
console.log(funzione);

function squareDigits(num) {
    var string = num.toString();
    var squareDigit = '';

    for (var i = 0; i < string.length; i++) {
        var num = parseInt(string[i]);
        var square = Math.pow(num, 2);

        squareDigit += square;
    }

    return parseInt(squareDigit);
}
