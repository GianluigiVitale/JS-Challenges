/* 23. Is the string uppercase?
    >a string is said to be in ALL CAPS whenever it does not contain any
     lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
    NOTES:
*/

var str = '';

var funzione = upperCaseCheck(str);
console.log(funzione);

function upperCaseCheck(str) {
    if (str == str.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}
