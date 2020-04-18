// 6. Say Hello Say Bye
    // Write a function that takes a string name and a number num (either 0 or 1)
    // and return "Hello" + name if num is 1, otherwise return "Bye" + name.
    // The name you return must be capitalized.

var name = 'giorgio';
var num = 0;
var funzione = sayHelloBye(name, num);
console.log(funzione)


function sayHelloBye(name, num) {
	var stringCapitalized = name[0].toUpperCase() + name.substring(1);			// da ricordare .toUpperCase() .substring()

	if (num == 1) {
		return "Hello " + stringCapitalized;
	} else {
		return "Bye " + stringCapitalized;
	}
}
