/* 29. Remove String Spaces
    >Simple, remove the spaces from the string, then return the resultant string.
    NOTES:
*/

var x = 'Hello HolaCiao';

var funzione = noSpace(x);
console.log(funzione);

function noSpace(x) {
    return x.replace(' ', '');
}
// alternative method
function noSpace(x) {
    var noSpaceStr = '';

    for (var i = 0; i < x.length; i++) {
        if (x[i] != ' ') {
            noSpaceStr += x[i];
        }
    }

    return noSpaceStr;
}
