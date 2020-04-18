/* 66. Vasya - Clerk

    >The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line.
     Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

     Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

     Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

     Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
     You may assume the parameter is positive.
    EXAMPLE:
    tickets([25, 25, 50]) // => YES
    tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
    tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
    NOTES:
*/

var peopleInLine = [25, 25, 25, 25, 50, 100, 50];


var funzione = tickets(peopleInLine);
console.log(funzione);

function tickets(peopleInLine) {
    var money = {
        25: 0,
        50: 0,
        100: 0
    }

    for (var i = 0; i < peopleInLine.length; i++) {
        var billX = peopleInLine[i];
        money[billX]++;

        if (billX == 50) {
            money[25]--;
            if (money[25] < 0) {
                return 'NO';
            }
        } else if (billX == 100) {
            if (money[50] >= 1 && money[25] >= 1) {
                money[50]--;
                money[25]--;
            } else if (money[25] >= 3) {
                money[25] += -3;
            } else {
                return 'NO';
            }
        }
    }

    return 'YES';
}
