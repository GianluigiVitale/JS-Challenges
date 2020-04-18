// 14. Filter Repeating Character Strings
/*  Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
    NOTES: 	A string with a single character is trivially counted as a string with repeating identical characters.
            If there are no strings with repeating identical characters, return an empty array (see example #3).*/

var arr = ['1', '22', '3'];

var funzione = identicalFilter(arr);
console.log(funzione)


function identicalFilter(arr) {
	var arraySingleChar = [];

	for (var i = 0; i < arr.length; i++) {
		var repeatingString = false;

		var lengthString = arr[i].length;

		for (var j = 0; j < (lengthString - 1); j++) {
			var chartString = arr[i][j];
			if (chartString != arr[i][j+1]) {
				repeatingString = true;
			}
		}
		if (repeatingString == false) {
			arraySingleChar.push(arr[i]);
		}
	}
	return arraySingleChar;
}
