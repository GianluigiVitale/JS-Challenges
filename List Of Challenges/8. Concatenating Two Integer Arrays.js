// 8. Concatenating Two Integer Arrays
/* Create a function to concatenate two integer arrays */

var arr1 = [1, 3, 5];
var arr2 = [2, 6, 8];

var funzione = concat(arr1, arr2);
console.log(funzione)


function concat(arr1, arr2) {
	var array1and2 = arr1;
	for (var i = 0; i < arr2.length; i++) {
		array1and2.push(arr2[i]);
	}

	return array1and2;
}
