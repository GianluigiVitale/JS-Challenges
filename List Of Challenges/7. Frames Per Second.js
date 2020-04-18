// 7. Frames Per Second
/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
    NOTES: FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
           Assume the screen produces 60 frames every second. */

var minutes = 99;
var fps = 1;

var funzione = frames(minutes, fps);
console.log(funzione)


function frames(minutes, fps) {
	var fps = minutes * fps * 60
	return fps;
}
