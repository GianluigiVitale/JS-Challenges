// 46. Practice creating a binary search algorithm

var numbers = [96, 58, 24, 30, 18, 32, 90, 63, 87, 56, 8, 15, 86, 74, 80, 99, 60,
               49, 97, 25, 77, 67, 57, 11, 95, 70, 7, 59, 19, 3, 23, 93, 66, 45,
               84, 21, 48, 83, 6, 16, 9];

var arrClone = numbers;
var arrSorted = arrClone.sort(function(a, b){return a-b});
console.log(arrSorted);

var t0 = performance.now();

var posizioneX = binarySearch(arrSorted, 0, arrSorted.length - 1, 99);
console.log(posizioneX);

var t1 = performance.now();
console.log('It took ' + (t1 - t0) + ' milliseconds');

function binarySearch(arr, l, r, x) {    // return the index of x (recursive)
    if (r >= l) {
        var mid = Math.floor(l + (r -l) / 2);
        if (arr[mid] == x) {
            return mid;
        } else if (arr[mid] > x) {
            return binarySearch(arr, l, mid - 1, x);
        } else {
            return binarySearch(arr, mid + 1, r, x);
        }
    } else {
        return -1;
    }
}
function binarySearch(arr, l, r, x) {    // return the index of x (iterative)
    while (l <= r) {
        var mid = Math.floor(l + (r -l) / 2);
        if (arr[mid] == x) {
            return mid;
        } else if (arr[mid] > x) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
}
