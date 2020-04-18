// 5. Find the Perimeter of a Rectangle
    // Create a function that takes height and width and finds the perimeter of a rectangle.

var height = 20;
var width = 10;
var funzione = findPerimeter(height, width);
console.log(funzione)


function findPerimeter(height, width) {
	var perimeter = (height + width) * 2;
	return perimeter;
}
