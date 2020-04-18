/* 50. Highest and Lowest from string

    >In this little assignment you are given a string of space separated numbers,
     and have to return the highest and lowest number.
    EXAMPLE:
        highAndLow("1 2 3 4 5");  // return "5 1"
        highAndLow("1 2 -3 4 5"); // return "5 -3"
        highAndLow("1 9 3 4 -5"); // return "9 -5"
    NOTES:
        All numbers are valid Int32, no need to validate them.
        There will always be at least one number in the input string.
        Output string must be two numbers separated by a single space, and highest number is first.

*/

var numbers = "8 16 -15 21 56 -4";

var funzione = highAndLow(numbers);
console.log(funzione);


function highAndLow(numbers) {
    var arrayNumbers = numbersStringToArray(numbers);

    var minNumber = arrayNumbers[0];
    var maxNumber = arrayNumbers[0];

    for (var i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] > maxNumber) {
            maxNumber = arrayNumbers[i];
        } else if (arrayNumbers[i] < minNumber) {
            minNumber = arrayNumbers[i];
        }
    }

    return maxNumber + ' ' + minNumber;
}

function numbersStringToArray(numbers) {        // questa funzione prende una stringa con numeri e la trasforma in un array
    var arrayNumbers = numbers.split(" ").map(Number);

    return arrayNumbers;
}
 // METODO ALTERNATIVO
function numbersStringToArray(numbers) { // (non volendo usare lo split e volendosi complicare la vita) questa funzione prende una stringa con numeri e la trasforma in un array
    var arrayNumbers = [];
    var numberLength = 0;

    for (var i = 0; i < numbers.length; i++) {      // ciclo nella stringa

        if (numbers[i] == '-' || !isNaN(parseInt(numbers[i]))) {    // se l'iesimo e' un meno (-) oppure un numero aumento il contatore di 1
            numberLength++;
        } else {                                                    // quando c'e' uno spazio
            var number = '';
            for (var k = (i - numberLength); k < i; k++) {          // torno indietro nella stringa 'numbers' di 'numberLength' posizioni
                number += numbers[k];                               // e ad ogni ciclo prendo il carattere e lo aggiungo alla variabile numero fino a che non raggiungo 'i'
            }
            arrayNumbers.push(parseInt(number));                    // inserisco nell'array il numero
            numberLength = 0;                                       // resetto il contatore lunghezza numero
        }

        if (i == numbers.length - 1) {                              // se sono arrivato alla fine della stringa devo fare alcune modifiche al ciclo for
            var number = '';                                        // dato che la i non coincide piu' con uno spazio
            for (var k = (i - numberLength + 1); k <= i; k++) {
                number += numbers[k];
            }
            arrayNumbers.push(parseInt(number));
            numberLength = 0;
        }
    }

    return arrayNumbers;
}
