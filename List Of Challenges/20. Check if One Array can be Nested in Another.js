/* 20. Check if One Array can be Nested in Another
    >Create a function that returns true if the first array can be nested inside the second.
    arr1 can be nested inside arr2 if:
        arr1's min is greater than arr2's min.
        arr1's max is less than arr2's max.
*/

var arr1 = [3, 1];
var arr2 = [4, 0];

var funzione = canNest(arr1, arr2);
console.log(funzione)

function canNest(arr1, arr2) {
	var minMaxArray1 = getMinMaxArray(arr1);
	var minMaxArray2 = getMinMaxArray(arr2);

	if ((minMaxArray1.minNum > minMaxArray2.minNum) && (minMaxArray1.maxNum < minMaxArray2.maxNum)) {
		return true;
	} else {
		return false;
	}
}

function getMinMaxArray(array) {
	var maxNum = array[0];
	var minNum = array[0];
	for (var i = 0; i < array.length; i++) {
		if (array[i] > maxNum) {
			maxNum = array[i];
		}
		if (array[i] < minNum) {
			minNum = array[i];
		}
	}

	return {
		maxNum: maxNum,
		minNum: minNum
	}
}
