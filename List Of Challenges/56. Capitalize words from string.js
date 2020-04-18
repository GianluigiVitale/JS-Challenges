/* 56. Capitalize words from string

    >Your task is to capitalize each word
    EXAMPLE:
    "How can mirrors be real if our eyes aren't real" ===> "How Can Mirrors Be Real If Our Eyes Aren't Real"
    NOTES:
*/

var str = "How can mirrors be real if our eyes aren't real";


var funzione = capitalize(str);
console.log(funzione);

function capitalize(str) {
    var strArray = str.split(' ');
    var arrayCapitalized = [];

    for (var i = 0; i < strArray.length; i++) {
        let stringICapitalized = strArray[i][0].toUpperCase() + strArray[i].substring(1);
        arrayCapitalized.push(stringICapitalized);
    }
    var stringCapitalized = arrayCapitalized.join(' ');

    return stringCapitalized;
}
