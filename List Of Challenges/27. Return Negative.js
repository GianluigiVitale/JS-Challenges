/* 27. Return Negative
    >In this simple assignment you are given a number and have to make it negative.
     But maybe the number is already negative?
    NOTES:
*/

var num = -40;

var funzione = makeNegative(num);
console.log(funzione);

function makeNegative(num) {
    if (num > 0) {
        return num * -1;
    } else {
        return num;
    }
}
