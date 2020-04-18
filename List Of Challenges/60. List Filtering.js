/* 60. List Filtering

    >In this kata you will create a function that takes a list of non-negative integers
     and strings and returns a new list with the strings filtered out.
    EXAMPLE:
        filter_list([1,2,'a','b']) == [1,2]
        filter_list([1,'a','b',0,15]) == [1,0,15]
        filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
    NOTES:
*/

var l = [1,2,'aasf','1','123',123];


var funzione = filter_list(l);
console.log(funzione);

function filter_list(l) {
    var newList = [];

    for (var i = 0; i < l.length; i++) {
        if (typeof l[i] == 'number') {      // used typeof instead of isNaN because isNaN takes the number even if it's in a string
            newList.push(l[i]);
        }
    }

    return newList;
}
