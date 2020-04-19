// 2. Power of number
var base = 5;
var exponent = 5;

var funzione = power(base, exponent);
console.log(funzione);


function power(base, exponent) {
	return Math.pow(base, exponent);
}
// alternative method
function power(base, exponent) {
	var number = 1;

	for (var i = 1; i <= exponent; i++) {
		number = number * base;
	}

	return number;
}
