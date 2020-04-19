/* 65. String incrementer

    >Your job is to write a function which increments a string, to create a new string.
     If the string already ends with a number, the number should be incremented by 1.
     If the string does not end with a number. the number 1 should be appended to the new string.
    EXAMPLE:
        foo -> foo1
        foobar23 -> foobar24
        foo0042 -> foo0043
        foo9 -> foo10
        foo099 -> foo100
    NOTES:
        If the number has leading zeros the amount of digits should be considered.
*/

var strng = 'foobar000';


var funzione = incrementString(strng);
console.log(funzione);

function incrementString(strng) {
    var numberStr = '';
    var word = '';

    for (var i = 0; i < strng.length; i++) {    // separate numbers from char
        if (!isNaN(strng[i])) {
            numberStr += strng[i];
        } else {
            word += strng[i]
        }
    }
    if (numberStr == '') {
        return word + '1';
    }

    var numbers = parseInt(numberStr) + 1;      // add a number to numberStr and convert to an integer
    var numberString = numbers.toString();

    var numberToAdd = '';

    if (numberString.length < numberStr.length) {   // if the new number has less digit than the original
        var differenceLength = numberStr.length - numberString.length;

        var newNumbers = '';
        for (var i = 1; i <= differenceLength; i++) {   // I add as many 0 as the difference
            newNumbers += '0';
        }
        newNumbers += numberString;
        numberToAdd = newNumbers;
    } else {
        numberToAdd = numberString;
    }

    return word + numberToAdd;
}
