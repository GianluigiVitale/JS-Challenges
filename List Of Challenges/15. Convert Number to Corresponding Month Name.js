/* 15. Convert Number to Corresponding Month Name
    >Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
    For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
    NOTES: 	You can expect only integers ranging from 1 to 12 as test input. */

var num = 12;

var funzione = monthName(num);
console.log(funzione)

function monthName(num) {
	var arrayMonth = ['January', 'February', 'March', 'April', 'May', 'June',
	'July', 'August', 'September', 'October', 'November', 'December'];
	
	return arrayMonth[num-1];
}
