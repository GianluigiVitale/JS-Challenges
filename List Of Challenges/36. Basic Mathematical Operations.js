/* 36. Basic Mathematical Operations

    >Your task is to create a function that does four basic mathematical operations.
    The function should take three arguments - operation(string/char), value1(number), value2(number).
    The function should return result of numbers after applying the chosen operation.
     For example:   basicOp('+', 4, 7)         // Output: 11
                    basicOp('-', 15, 18)       // Output: -3
                    basicOp('*', 5, 5)         // Output: 25
                    basicOp('/', 49, 7)        // Output: 7
     The correct answer would be 17.
    NOTES:
*/

var operation = '+';
var value1 = 4;
var value2 = 7;

var funzione = basicOp(operation, value1, value2);
console.log(funzione);

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2
            break;
        case '-':
            return value1 - value2
            break;
        case '*':
            return value1 * value2
            break;
        case '/':
            return value1 / value2
            break;
    }
}
