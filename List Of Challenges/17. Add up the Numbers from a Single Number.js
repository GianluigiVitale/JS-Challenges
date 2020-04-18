/* 17. Add up the Numbers from a Single Number
    >Create a function that takes a number as an argument.
    Add up all the numbers from 1 to the number you passed to the function.
    For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
    NOTES: Expect any positive number between 1 and 1000.
*/

var num = 4;

var funzione = addUp(num);
console.log(funzione)

function addUp(num) {
	var sum = 0;
	for (var i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}
