// 3. Maximum edge of triangle
var side1 = 7;
var side2 = 9;

var funzione = nextEdge(side1, side2);
console.log(funzione)

function nextEdge(side1, side2) {
	var maximumEdge = (side1 + side2) - 1;
	return maximumEdge;
}
