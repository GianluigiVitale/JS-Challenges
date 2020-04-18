// 10. Is the Number Even or Odd
/* Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers. */

var num = 12;

var funzione = isEvenOrOdd(num);
console.log(funzione)


function isEvenOrOdd(num) {
	if (num % 2 == 0) {
		return 'even';
	} else {
		return 'odd';
	}
}
