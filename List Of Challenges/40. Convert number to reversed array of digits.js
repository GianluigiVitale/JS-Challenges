/* 40. Convert number to reversed array of digits

    >Given a random number: You have to return the digits of this number within an array in reverse order.
      Example:
      348597 => [7,9,5,8,4,3]
*/

var n = 35231;

var funzione = digitize(n);
console.log(funzione);

function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}
// alternative method
function digitize(n) {
    var numberToString = n.toString();
    var arrayNumberReversed = [];

    for (var i = numberToString.length - 1; i >= 0; i--) {
        arrayNumberReversed.push(parseInt(numberToString[i]))
    }

    return arrayNumberReversed;
}
