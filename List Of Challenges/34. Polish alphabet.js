/* 34. Polish alphabet
    >There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
    Your task is to change the letters with diacritics:
    ą -> a,
    ć -> c,
    ę -> e,
    ł -> l,
    ń -> n,
    ó -> o,
    ś -> s,
    ź -> z,
    ż -> z
    and print out the string without the use of the Polish letters.
    NOTES:
*/

var string = "Jędrzej Błądziński";

var funzione = correctPolishLetters(string);
console.log(funzione);

function correctPolishLetters(string) {
    var polishDiacritics = {
        ą: 'a',
        ć: 'c',
        ę: 'e',
        ł: 'l',
        ń: 'n',
        ó: 'o',
        ś: 's',
        ź: 'z',
        ż: 'z'
    }

    var newString = '';

    for (var i = 0; i < string.length; i++) {
        var modifyChar = false;

        for (var key in polishDiacritics) {
            if (string[i] == key) {
                newString += polishDiacritics[key]
                modifyChar = true;
            }
        }

        if (modifyChar == false) {
            newString += string[i]
        }
    }

    return newString;
}
