// 4. Return the Last Element in an Array
    // Create a function that accepts an array and returns the last item in the array.

var arr = [1,2,3,4,5];
var funzione = getLastItem(arr);
console.log(funzione)


function getLastItem(arr) {
	var numberLastItemArray = arr.length - 1;
	return arr[numberLastItemArray];
}
