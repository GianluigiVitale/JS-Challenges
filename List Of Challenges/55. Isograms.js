/* 55. Isograms

    >An isogram is a word that has no repeating letters, consecutive or non-consecutive.
     Implement a function that determines whether a string that contains only letters is an isogram.
     Assume the empty string is an isogram.
    EXAMPLE:
        isIsogram("Dermatoglyphics") == true
        isIsogram("aba") == false
        isIsogram("moOse") == false
    NOTES:
*/

var str = "Dermatoglyphics";
var str = "moOse";


var funzione = isIsogram(str);
console.log(funzione);

function isIsogram(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = (i + 1); j < str.length; j++) {
            if (str[i].toLowerCase() == str[j].toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}
