/* 30. Find the smallest integer in the array
    >Given an array of integers your solution should find the smallest integer.
    NOTES:
*/

var arr = [34, -345, -1, 100];

var funzione = minMax(arr);
console.log(funzione);

function minMax(arr) {
	return Math.min(...arr);
}
// alternative method
function minMax(arr) {
	var minNum = arr[0];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < minNum) {
			minNum = arr[i];
		}
	}

	return minNum;
}
