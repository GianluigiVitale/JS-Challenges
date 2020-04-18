/* 64. Find the next perfect square!

    >Find the next integral perfect square after the one passed as a parameter.
     Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
     If the parameter is itself not a perfect square, than -1 should be returned.
     You may assume the parameter is positive.
    EXAMPLE:
        findNextSquare(121) --> returns 144
        findNextSquare(625) --> returns 676
        findNextSquare(114) --> returns -1 since 114 is not a perfect
    NOTES:
*/

var sq = 121;


var funzione = findNextSquare(sq);
console.log(funzione);

function findNextSquare(sq) {
    if (!Number.isInteger(Math.sqrt(sq))) { // if 'sq' is not a perfect square
        return -1;
    }

    var newSq = sq + 1;
    while (!Number.isInteger(Math.sqrt(newSq))) {   // I add 1 to 'newSq' until the square of that number is not an integer
        newSq++;
    }

    return newSq;
}
