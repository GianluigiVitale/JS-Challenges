/* 62. Credit Card Mask

    >Your task is to write a function maskify, which changes all but the last four characters into '#'.
     No floats or non-positive integers will be passed.
    EXAMPLE:
        maskify("4556364607935616") == "############5616"
        maskify(     "64607935616") ==      "#######5616"
        maskify(               "1") ==                "1"
        maskify(                "") ==                 ""

        // "What was the name of your first pet?"
        maskify("Skippy")                                   == "##ippy"
    NOTES:
*/

var cc = '4556364607935616';


var funzione = maskify(cc);
console.log(funzione);

function maskify(cc) {
    if (cc.length >= 5) {
        var maskedString = '';
        for (var i = 0; i < cc.length - 4; i++) {
            maskedString += '#';
        }
        for (var i = cc.length - 4; i < cc.length; i++) {
            maskedString += cc[i];
        }

        return maskedString;
    } else {
        return cc;
    }
}
