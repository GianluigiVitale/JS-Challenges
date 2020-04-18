/* 47. Rotate an array

    >Write a function rotate(arr[], d, n) that rotates arr[] of size n by d elements.
      Example:
            Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7    ==>
            arr[] = [3, 4, 5, 6, 7, 1, 2]
*/

var arr = [1, 2, 3, 4, 5, 6, 7];
var d = 2;


var funzione = leftRotate(arr, d);
console.log(funzione);

function leftRotate(arr, d) {
    var arrFirstDElements = [];
    var restOfArray = [];

    for (var i = 0; i < d; i++) {
        arrFirstDElements.push(arr[i])
    }
    for (var i = d; i < arr.length; i++) {
        restOfArray.push(arr[i])
    }

    var rotatedArray = restOfArray.concat(arrFirstDElements);

    return rotatedArray
}
