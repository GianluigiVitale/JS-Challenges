/* 53. Shortest Word

    >Simple, given a string of words, return the length of the shortest word(s).
     String will never be empty and you do not need to account for different data types.
    EXAMPLE:
    NOTES:
*/

var s = 'turns out random test cases are easier than writing out basic ones';


var funzione = findShort(s);
console.log(funzione);

function findShort(s) {
    var arrayStr = s.split(' ');

    var shortestString = arrayStr[0];
    for (var i = 0; i < arrayStr.length; i++) {
        if (arrayStr[i].length < shortestString.length) {
            shortestString = arrayStr[i];
        }
    }

    return shortestString.length;
}
