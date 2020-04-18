/* 41. Count of positives - sum of negatives

    >Given an array of integers.Return an array, where the first element is
    the count of positives numbers and the second element is sum of negative numbers.
    If the input array is empty or null, return an empty array.
      Example:
      For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

var input = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];


var funzione = countPositivesSumNegatives(input);
console.log(funzione);

function countPositivesSumNegatives(input) {
    if (input === null || input.length == 0) {
        return [];
    }

    var countPositiveNumber = 0;
    var sumNegativeNumber = 0;

    for (var i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            countPositiveNumber += 1;
        } else {
            sumNegativeNumber += input[i];
        }
    }

    var arrayPosNeg = [countPositiveNumber, sumNegativeNumber];

    return arrayPosNeg;
}
