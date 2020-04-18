/* 63. Sum of odd numbers

    >Given the triangle of consecutive odd numbers:
                        1
                     3     5
                  7     9    11
               13    15    17    19
            21    23    25    27    29
                        ...
    Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
    EXAMPLE:
        rowSumOddNumbers(1); // 1
        rowSumOddNumbers(2); // 3 + 5 = 8
    NOTES:
*/

var n = 5;


var funzione = rowSumOddNumbers(n);
console.log(funzione);


function rowSumOddNumbers(n) {  // easy solution
    return Math.pow(n, 3);
}
function rowSumOddNumbers(n) {
    if (n == 1) {
        return 1;
    }

    var numbersToCreateBefore = 0;
    for (var i = n - 1; i > 0; i--) {           // this for loop tells me how many odd numbers there are before
        numbersToCreateBefore += i;             // the selected row (n)
    }

    var oddNumber = 1;
    for (var i = 1; i < numbersToCreateBefore; i++) {   // since now I know how many odd numbers there are before n
        oddNumber += 2;                                 // with a for loop I can create the last odd number before the row n
    }

    var rowSumNumber = 0;
    for (var i = 1; i <= n; i++) {              // now I can create the sum of the row numbers by generating the next odd numbers
        oddNumber += 2;                         // that are equal to the number of the row
        rowSumNumber += oddNumber;
    }

    return rowSumNumber;
}
