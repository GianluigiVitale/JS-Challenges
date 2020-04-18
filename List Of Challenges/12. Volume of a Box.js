// 12. Volume of a Box
/*  Create a function that takes an object argument sizes (contains width, length, height keys)
    and returns the volume of the box.
    NOTES: volume is length * width * height

*/

var sizes = {width: 11,length: 1,height: 2}

var funzione = volumeOfBox(sizes);
console.log(funzione)


function volumeOfBox(sizes) {
	var volume = 1;
	for (var key in sizes) {
		volume = volume * sizes[key];
	}

	return volume;
}
