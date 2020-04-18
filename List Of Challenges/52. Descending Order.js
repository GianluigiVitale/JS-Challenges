/* 52. Descending Order

    >Your task is to make a function that can take any non-negative integer as a argument and return it
     with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
    EXAMPLE:
        Input: 21445 Output: 54421
        Input: 145263 Output: 654321
        Input: 123456789 Output: 987654321
    NOTES:
*/

var n = 123456789;


var funzione = descendingOrder(n);
console.log(funzione);

function descendingOrder(n) {
    var nString = n.toString();
    var tempArray = [];

    for (var i = 0; i < nString.length; i++) {
        tempArray.push(parseInt(nString[i]));
    }

    tempArray.sort(function(a, b){return b-a});
    var arrayJoined = parseInt(tempArray.join(''));

    return arrayJoined;
}
