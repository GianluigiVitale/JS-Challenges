/* 39. Century From Year

    >The first century spans from the year 1 up to and including the year 100,
     The second - from the year 101 up to and including the year 200, etc.
      Example:
      centuryFromYear(1705)  returns (18)
      centuryFromYear(1900)  returns (19)
      centuryFromYear(1601)  returns (17)
      centuryFromYear(2000)  returns (20)
*/

var year = 170005;
var funzione = century(year);
console.log(funzione);

function century(year) {
    if (year <= 100) {
        return 1;
    } else {
        var yearStr = year.toString();
        var yearLast2Digits = yearStr.slice(-2);                        // .toString(), .slice(), .substring() remember
        var lengthStrYear = yearStr.length - 2;

        if (yearLast2Digits == 00) {
            return parseInt(yearStr.slice(0, lengthStrYear));
        } else {
            return parseInt(yearStr.slice(0, lengthStrYear)) + 1;
        }

    }
}
