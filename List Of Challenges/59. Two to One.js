/* 59. Two to One

    >Take 2 strings s1 and s2 including only letters from ato z.
     Return a new sorted string, the longest possible, containing distinct letters,
     each taken only once - coming from s1 or s2.
    EXAMPLE:
        a = "xyaabbbccccdefww"
        b = "xxxxyyyyabklmopq"
        longest(a, b) -> "abcdefklmopqwxy"

        a = "abcdefghijklmnopqrstuvwxyz"
        longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
    NOTES:
*/

var s1 = 'aretheyhere';
var s2 = 'yestheyarehere';


var funzione = longest(s1, s2);
console.log(funzione);

function longest(s1, s2) {
    var sumString = s1 + s2;

    var distinctString = [];
    for (var i = 0; i < sumString.length; i++) {
        if (!distinctString.includes(sumString[i])) { // if sumString[i] is not already present push
            distinctString.push(sumString[i]);
        }
    }
    var sortedArray = distinctString.sort();
    var sortedString = sortedArray.join('');

    return sortedString;
}
