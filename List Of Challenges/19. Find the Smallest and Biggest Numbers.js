/* 19. Find the Smallest and Biggest Numbers
    >Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
*/

var arr = [14, 35, 6, 1, 34, 54];

var funzione = minMax(arr);
console.log(funzione)

function minMax(arr) {
	var minNum = Math.min(...arr);
	var maxNum = Math.max(...arr);

    return [minNum, maxNum];
}
// alternative method
function minMax(arr) {
	var arrayMinMax = [];
	var maxNum = arr[0];
	var minNum = arr[0];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > maxNum) {
			maxNum = arr[i];
		}
		if (arr[i] < minNum) {
			minNum = arr[i];
		}
	}
	arrayMinMax.push(minNum);
	arrayMinMax.push(maxNum);

	return arrayMinMax;
}
