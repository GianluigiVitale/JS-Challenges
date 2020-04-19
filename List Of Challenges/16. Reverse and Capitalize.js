/* 16. Reverse and Capitalize
    >Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.*/

var str = 'CIAO';

var funzione = reverseCapitalize(str);
console.log(funzione)

function reverseCapitalize(str) {
	return str.split('').reverse().join('').toUpperCase();
}
// alternative method
function reverseCapitalize(str) {
	var newStringReversed = '';

	for (var i = (str.length - 1); i >= 0; i--) {
		newStringReversed += str[i];
	}

	var newStringCapitalized = newStringReversed.toUpperCase();
	return newStringCapitalized;
}
