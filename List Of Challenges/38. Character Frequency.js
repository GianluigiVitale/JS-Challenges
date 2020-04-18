/* 38. Character Frequency

    >In this kata, you will get a message and you will need to get the frequency of each and every character!
      Your function will be called charFreq and you will get passed a string,
      you will then return a dictionary (object in JavaScript) with as keys the characters,
      and as values how many times that character is in the string.
      You can assume you will be given valid input.
      Example:
      charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}
    NOTES:
        http://i.imgur.com/aimOQVX.png
*/

var message = 'Your solution';

var funzione = charFreq(message);
console.log(funzione);

function charFreq(message) {
    var dictionary = {};

    for (var i = 0; i < message.length; i++) {
        var messageI = message[i];
        // console.log(messageI);

        if (dictionary[messageI] === undefined) {
            dictionary[messageI] = 0;
        }
        dictionary[messageI] += 1;
    }

    return dictionary;
}
