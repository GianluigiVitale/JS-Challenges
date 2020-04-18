/* 18. Matchstick Houses
    >Create a function that takes a number (step) as an argument and returns
    the amount of matchsticks in that step. See step 1, 2 and 3 in the image below.
        https://edabit-challenges.s3.amazonaws.com/matchstick_houses.png
    NOTES: 	Step 0 returns 0 matchsticks.
            The input (step) will always be a non-negative integer.
*/

var step = 87;

var funzione = matchHouses(step);
console.log(funzione)

function matchHouses(step) {
	if (step == 0) {
		return 0;
	} else {
		return (5 * step) + 1;
	}
}
