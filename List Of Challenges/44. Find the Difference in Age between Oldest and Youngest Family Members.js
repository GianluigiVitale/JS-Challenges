/* 44. Find the Difference in Age between Oldest and Youngest Family Members

    >At the annual family gathering, the family likes to find the oldest living family member’s age
     and the youngest family member’s age and calculate the difference between them.
     You will be given an array of all the family members' ages, in any order.
     The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.
     Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/

var ages = [82, 15, 6, 38, 35];


var funzione = differenceInAges(ages);
console.log(funzione);

function differenceInAges(ages) {
    var maxAge = Math.max(...ages);
    var minAge = Math.min(...ages);
    var differenceAge = maxAge - minAge;

    return [minAge, maxAge, differenceAge];
}
