/* 24. Sum of positive
    >You get an array of numbers, return the sum of all of the positives ones.
    NOTES:
*/

var arr = [1,-4,7,12];

var funzione = positiveSum(arr);
console.log(funzione);

function positiveSum(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
}
