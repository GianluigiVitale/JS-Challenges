/* 61. Sum of two lowest positive integers

    >Create a function that returns the sum of the two lowest positive numbers
     given an array of minimum 4 positive integers.
     No floats or non-positive integers will be passed.
    EXAMPLE:
        when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
        [10, 343445353, 3453445, 3453545353453] should return 3453455.
    NOTES:
*/

var numbers = [15, 28, 4, 2, 43];


var funzione = sumTwoSmallestNumbers(numbers);
console.log(funzione);

function sumTwoSmallestNumbers(numbers) {
    var numbersSorted = numbers.sort(function(a, b){return a-b});
    var sumOf2Lowest = numbersSorted[0] + numbersSorted[1];

    return sumOf2Lowest;
}
