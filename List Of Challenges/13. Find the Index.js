// 13. Find the Index
/*  Create a function that takes an array and a string as arguments and return the index of the string.*/

var arr = ['abc', 'ghj', 'banana', 'grape'];
var str = 'grape';

var funzione = findIndex(arr, str);
console.log(funzione)


function findIndex(arr, str) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == str) {
			var strIndex = i;
		}
	}
	return strIndex
}
