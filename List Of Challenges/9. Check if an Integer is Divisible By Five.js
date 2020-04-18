// 9. Check if an Integer is Divisible By Five
/* Create a function that returns true if an integer is evenly divisible by 5, and false otherwise. */

var n = 7;

var funzione = divisibleByFive(n);
console.log(funzione)


function divisibleByFive(n) {
	if (n % 5 == 0) {
		return true;
	} else {
		return false;
	}
}
