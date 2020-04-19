/* 48. Vowel Count

    >Return the number (count) of vowels in the given string.
     We will consider a, e, i, o, and u as vowels for this Kata.
     The input string will only consist of lower case letters and/or spaces.
*/

var str = 'abracadabra';


var funzione = getCount(str);
console.log(funzione);

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] == vowels[i]) {
                vowelsCount++;
            }
        }
    }

    return vowelsCount;
}
