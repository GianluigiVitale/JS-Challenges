// 11. Compare Strings by Count of Characters
/*  Create a function that takes two strings as arguments and return either
    true or false depending on whether the total number of characters in the first
    string is equal to the total number of characters in the second string. */

var str1 = 'ciao1';
var str2 = 'ciao';

var funzione = comp(str1, str2);
console.log(funzione)


function comp(str1, str2) {
	if (str1.length == str2.length) {
		return true;
	} else {
		return false;
	}
}
