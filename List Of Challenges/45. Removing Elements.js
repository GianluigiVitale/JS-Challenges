/* 45. Removing Elements

    >Take an array and remove every second element out of that array.
     Always keep the first element and start removing with the next element.
     Notes:  None of the arrays will be empty, so you don't have to worry about that!
     Example:
     myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
*/

var arr = ['Hello', 'Goodbye', 'Hello Again'];


var funzione = removeEveryOther(arr);
console.log(funzione);

function removeEveryOther(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i = i+2) {
        newArr.push(arr[i]);
    }

    return newArr;
}
