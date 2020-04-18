/* 54. Remove vowels

    >Your task is to write a function that takes a string and return a new string with all vowels removed.
    EXAMPLE:
        the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
    NOTES:
*/

var str = "This website is for losers LOL!";


var funzione = disemvowel(str);
console.log(funzione);

function disemvowel(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                break
            case 'A':
                break
            case 'e':
                break
            case 'E':
                break
            case 'i':
                break
            case 'I':
                break
            case 'o':
                break
            case 'O':
                break
            case 'u':
                break
            case 'U':
                break
            default:
                newStr += str[i];
        }
    }

    return newStr;
}
