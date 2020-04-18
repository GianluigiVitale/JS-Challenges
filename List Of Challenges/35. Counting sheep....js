/* 35. Counting sheep...

    >Consider an array/list of sheep where some sheep may be missing from their place.
     We need a function that counts the number of sheep present in the array (true means present).
     For example: [true,  true,  true,  false,
                  true,  true,  true,  true ,
                  true,  false, true,  false,
                  true,  false, false, true ,
                  true,  true,  true,  true ,
                  false, false, true,  true]
     The correct answer would be 17.
    NOTES:
*/

var arrayOfSheep = [true,  true,  true,  false,
                    true,  true,  true,  true ,
                    true,  false, true,  false,
                    true,  false, false, true ,
                    true,  true,  true,  true ,
                    false, false, true,  true ];

var funzione = countSheeps(arrayOfSheep);
console.log(funzione);

function countSheeps(arrayOfSheep) {
    var sheepCount = 0;

    for (var i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            sheepCount += 1;
        }
    }

    return sheepCount;
}
