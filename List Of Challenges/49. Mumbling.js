/* 49. Mumbling

    >Return the number (count) of vowels in the given string.
     We will consider a, e, i, o, and u as vowels for this Kata.
     The input string will only consist of lower case letters and/or spaces.
    EXAMPLE:
        accum("abcd") -> "A-Bb-Ccc-Dddd"
        accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
        accum("cwAt") -> "C-Ww-Aaa-Tttt"
    NOTES:
        The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

var s = 'ZpglnRxqenU';


var funzione = accum(s);
console.log(funzione);

function accum(s) {
    var strAccum = '';

    for (var i = 0; i < s.length; i++) {
        strAccum += s[i].toUpperCase();
        var lowerCaseLetter = s[i].toLowerCase();

        for (var j = 0; j <= (i - 1); j++) {
            strAccum += lowerCaseLetter;
        }

        if (i < s.length - 1) {
            strAccum += '-';
        }
    }

    return strAccum;
}
