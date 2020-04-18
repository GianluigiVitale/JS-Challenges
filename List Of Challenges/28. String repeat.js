/* 28. String repeat
    >Write a function called repeatString which repeats the given String src
     exactly count times.
    NOTES:
*/

var n = 5;
var s = 'Hello';

var funzione = repeatStr(n, s);
console.log(funzione);

function repeatStr(n, s) {
    var repeatedString = '';

    for (var i = 1; i <= n; i++) {
        repeatedString += s;
    }

    return repeatedString;
}
