    // 8kyu
//-----------------------------------------------------------------------------------------------------
	// 1. Reverse Array
// var array = [8,2,5,9,7,3,6,2]
// var arrayReversed = reverseArrayInPlace(array);
// console.log(arrayReversed);

//	array.reverse(); 	// questo sotto e' come funziona reverse()
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	// 2. Power of number
// var base = 5;
// var exponent = 5;
//
// var funzione = power(base, exponent);
// console.log(funzione);
//
// function power(base, exponent) {
// 	var number = 1;
//
// 	for (var i = 1; i <= exponent; i++) {
// 		number = number * base;
// 	}
//
// 	return number;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	// 3. Maximum edge of triangle
// var side1 = 7;
// var side2 = 9;
//
// var funzione = nextEdge(side1, side2);
// console.log(funzione)
//
// function nextEdge(side1, side2) {
// 	var maximumEdge = (side1 + side2) - 1;
// 	return maximumEdge;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	// 4. Return the Last Element in an Array
		// Create a function that accepts an array and returns the last item in the array.

// var arr = [1,2,3,4,5];
// var funzione = getLastItem(arr);
// console.log(funzione)
//
//
// function getLastItem(arr) {
// 	var numberLastItemArray = arr.length - 1;
// 	return arr[numberLastItemArray];
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	// 5. Find the Perimeter of a Rectangle
		// Create a function that takes height and width and finds the perimeter of a rectangle.

// var height = 20;
// var width = 10;
// var funzione = findPerimeter(height, width);
// console.log(funzione)
//
//
// function findPerimeter(height, width) {
// 	var perimeter = (height + width) * 2;
// 	return perimeter;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	// 6. Say "Hello" Say "Bye"
		// Write a function that takes a string name and a number num (either 0 or 1)
		// and return "Hello" + name if num is 1, otherwise return "Bye" + name.
		// The name you return must be capitalized.

// var name = 'giorgio';
// var num = 0;
// var funzione = sayHelloBye(name, num);
// console.log(funzione)
//
//
// function sayHelloBye(name, num) {
// 	var stringCapitalized = name[0].toUpperCase() + name.substring(1);			// da ricordare .toUpperCase() .substring()
//
// 	if (num == 1) {
// 		return "Hello " + stringCapitalized;
// 	} else {
// 		return "Bye " + stringCapitalized;
// 	}
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	// 7. Frames Per Second
	/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
	 	NOTES: FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
			   Assume the screen produces 60 frames every second. */

// var minutes = 99;
// var fps = 1;
//
// var funzione = frames(minutes, fps);
// console.log(funzione)
//
//
// function frames(minutes, fps) {
// 	var fps = minutes * fps * 60
// 	return fps;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	// 8. Concatenating Two Integer Arrays
	/* Create a function to concatenate two integer arrays */

// var arr1 = [1, 3, 5];
// var arr2 = [2, 6, 8];
//
// var funzione = concat(arr1, arr2);
// console.log(funzione)
//
//
// function concat(arr1, arr2) {
// 	var array1and2 = arr1;
// 	for (var i = 0; i < arr2.length; i++) {
// 		array1and2.push(arr2[i]);
// 	}
//
// 	return array1and2;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	// 9. Check if an Integer is Divisible By Five
	/* Create a function that returns true if an integer is evenly divisible by 5, and false otherwise. */

// var n = 7;
//
// var funzione = divisibleByFive(n);
// console.log(funzione)
//
//
// function divisibleByFive(n) {
// 	if (n % 5 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	// 10. Is the Number Even or Odd?
	/* Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers. */

// var num = 12;
//
// var funzione = isEvenOrOdd(num);
// console.log(funzione)
//
//
// function isEvenOrOdd(num) {
// 	if (num % 2 == 0) {
// 		return 'even';
// 	} else {
// 		return 'odd';
// 	}
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	// 11. Compare Strings by Count of Characters
	/*  Create a function that takes two strings as arguments and return either
		true or false depending on whether the total number of characters in the first
		string is equal to the total number of characters in the second string. */

// var str1 = 'ciao1';
// var str2 = 'ciao';
//
// var funzione = comp(str1, str2);
// console.log(funzione)
//
//
// function comp(str1, str2) {
// 	if (str1.length == str2.length) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	// 12. Volume of a Box
	/*  Create a function that takes an object argument sizes (contains width, length, height keys)
		and returns the volume of the box.
		NOTES: volume is length * width * height

 	*/

// var sizes = {width: 11,length: 1,height: 2}
//
// var funzione = volumeOfBox(sizes);
// console.log(funzione)
//
//
// function volumeOfBox(sizes) {
// 	var volume = 1;
// 	for (var key in sizes) {
// 		volume = volume * sizes[key];
// 	}
//
// 	return volume;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	// 13. Find the Index
	/*  Create a function that takes an array and a string as arguments and return the index of the string.*/

// var arr = ['abc', 'ghj', 'banana', 'grape'];
// var str = 'grape';
//
// var funzione = findIndex(arr, str);
// console.log(funzione)
//
//
// function findIndex(arr, str) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] == str) {
// 			var strIndex = i;
// 		}
// 	}
// 	return strIndex
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------     // DA RIGUARDARE
	// 14. Filter Repeating Character Strings
	/*  Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
		NOTES: 	A string with a single character is trivially counted as a string with repeating identical characters.
				If there are no strings with repeating identical characters, return an empty array (see example #3).*/

// var arr = ['1', '22', '3'];
//
// var funzione = identicalFilter(arr);
// console.log(funzione)
//
//
// function identicalFilter(arr) {
// 	var arraySingleChar = [];
//
// 	for (var i = 0; i < arr.length; i++) {
// 		var repeatingString = false;
//
// 		var lengthString = arr[i].length;
//
// 		for (var j = 0; j < (lengthString - 1); j++) {
// 			var chartString = arr[i][j];
// 			if (chartString != arr[i][j+1]) {
// 				repeatingString = true;
// 			}
// 		}
// 		if (repeatingString == false) {
// 			arraySingleChar.push(arr[i]);
// 		}
// 	}
// 	return arraySingleChar;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	/* 15. Convert Number to Corresponding Month Name
		>Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
		For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
		NOTES: 	You can expect only integers ranging from 1 to 12 as test input. */

// var num = 12;
//
// var funzione = monthName(num);
// console.log(funzione)
//
// function monthName(num) {
// 	var arrayMonth = ['January', 'February', 'March', 'April', 'May', 'June',
// 	'July', 'August', 'September', 'October', 'November', 'December'];
// 	return arrayMonth[num-1];
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	/* 16. Reverse and Capitalize
		>Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.*/

// var str = 'CIAO';
//
// var funzione = reverseCapitalize(str);
// console.log(funzione)
//
// function reverseCapitalize(str) {
// 	var newStringReversed = '';
//
// 	for (var i = (str.length - 1); i >= 0; i--) {
// 		newStringReversed += str[i];
// 	}
//
// 	var newStringCapitalized = newStringReversed.toUpperCase();
// 	return newStringCapitalized;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	/* 17. Add up the Numbers from a Single Number
		>Create a function that takes a number as an argument.
		Add up all the numbers from 1 to the number you passed to the function.
		For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
		NOTES: Expect any positive number between 1 and 1000.
	*/

// var num = 4;
//
// var funzione = addUp(num);
// console.log(funzione)
//
// function addUp(num) {
// 	var sum = 0;
// 	for (var i = 1; i <= num; i++) {
// 		sum += i;
// 	}
// 	return sum;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	/* 18. Matchstick Houses
		>Create a function that takes a number (step) as an argument and returns
		the amount of matchsticks in that step. See step 1, 2 and 3 in the image below.
			https://edabit-challenges.s3.amazonaws.com/matchstick_houses.png
		NOTES: 	Step 0 returns 0 matchsticks.
				The input (step) will always be a non-negative integer.
	*/

// var step = 87;
//
// var funzione = matchHouses(step);
// console.log(funzione)
//
// function matchHouses(step) {
// 	if (step == 0) {
// 		return 0;
// 	} else {
// 		return (5 * step) + 1;
// 	}
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
	/* 19. Find the Smallest and Biggest Numbers
		>Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
	*/

// var arr = [14, 35, 6, 1, 34, 54];
//
// var funzione = minMax(arr);
// console.log(funzione)
//
// function minMax(arr) {
// 	var arrayMinMax = [];
// 	var maxNum = arr[0];
// 	var minNum = arr[0];
//
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] > maxNum) {
// 			maxNum = arr[i];
// 		}
// 		if (arr[i] < minNum) {
// 			minNum = arr[i];
// 		}
// 	}
// 	arrayMinMax.push(minNum);
// 	arrayMinMax.push(maxNum);
//
// 	return arrayMinMax;
// }
//-----------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------
	/* 20. Check if One Array can be Nested in Another
		>Create a function that returns true if the first array can be nested inside the second.
		arr1 can be nested inside arr2 if:
			arr1's min is greater than arr2's min.
			arr1's max is less than arr2's max.
	*/

// var arr1 = [3, 1];
// var arr2 = [4, 0];
//
// var funzione = canNest(arr1, arr2);
// console.log(funzione)
//
// function canNest(arr1, arr2) {
// 	var minMaxArray1 = getMinMaxArray(arr1);
// 	var minMaxArray2 = getMinMaxArray(arr2);
//
// 	if ((minMaxArray1.minNum > minMaxArray2.minNum) && (minMaxArray1.maxNum < minMaxArray2.maxNum)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
//
// function getMinMaxArray(array) {
// 	var maxNum = array[0];
// 	var minNum = array[0];
// 	for (var i = 0; i < array.length; i++) {
// 		if (array[i] > maxNum) {
// 			maxNum = array[i];
// 		}
// 		if (array[i] < minNum) {
// 			minNum = array[i];
// 		}
// 	}
//
// 	return {
// 		maxNum: maxNum,
// 		minNum: minNum
// 	}
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 21. Equal sign
        >Create a function that return true if n1 and n2 > 0 or if n1 and n2 < 0 or if n1 and n2 = 0 else
         return false
    */

// var n1 = -2;
// var n2 = 6;
//
// var funzione = both(n1, n2);
// console.log(funzione)
//
// function both(n1, n2) {
//     if ((n1 > 0 && n2 > 0) || (n1 < 0 && n2 < 0) || (n1 == 0 && n2 == 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 22. altERnaTIng cAsE <=> ALTerNAtiNG CaSe
        >each lowercase letter becomes uppercase and each uppercase letter becomes lowercase
        NOTES:
    */

// var item = 'PiPPo';
//
// var funzione = alternateCase(item);
// console.log(funzione);
//
// function alternateCase(item) {
//     var stringSwitch = '';
//
//     for (var i = 0; i < item.length; i++) {
//         if (item[i] == item[i].toLowerCase()) {
//             stringSwitch += item[i].toUpperCase();
//         } else {
//             stringSwitch += item[i].toLowerCase();
//         }
//     }
//
//     return stringSwitch;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 23. Is the string uppercase?
        >a string is said to be in ALL CAPS whenever it does not contain any
         lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
        NOTES:
    */

// var str = '';
//
// var funzione = upperCaseCheck(str);
// console.log(funzione);
//
// function upperCaseCheck(str) {
//     if (str == str.toUpperCase()) {
//         return true;
//     } else {
//         return false;
//     }
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 24. Sum of positive
        >You get an array of numbers, return the sum of all of the positives ones.
        NOTES:
    */

// var arr = [1,-4,7,12];
//
// var funzione = positiveSum(arr);
// console.log(funzione);
//
// function positiveSum(arr) {
//     var sum = 0;
//
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//
//     return sum;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 25. Opposite number
        >Very simple, given a number, find its opposite.
        NOTES:
    */

// var number = 5;
//
// var funzione = opposite(number);
// console.log(funzione);
//
// function opposite(number) {
//     return number * -1;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 26. Remove First and Last Character
        >It's pretty straightforward. Your goal is to create a function that
         removes the first and last characters of a string. You're given one parameter,
         the original string. You don't have to worry with strings with less than two characters.
        NOTES:
    */

// var str = 'bella';
//
// var funzione = removeChar(str);
// console.log(funzione);
//
// function removeChar(str) {
//     return str.substring(1, (str.length - 1));
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 27. Return Negative
        >In this simple assignment you are given a number and have to make it negative.
         But maybe the number is already negative?
        NOTES:
    */

// var num = -40;
//
// var funzione = makeNegative(num);
// console.log(funzione);
//
// function makeNegative(num) {
//     if (num > 0) {
//         return num * -1;
//     } else {
//         return num;
//     }
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 28. String repeat
        >Write a function called repeatString which repeats the given String src
         exactly count times.
        NOTES:
    */

// var n = 5;
// var s = 'Hello';
//
// var funzione = repeatStr(n, s);
// console.log(funzione);
//
// function repeatStr(n, s) {
//     var repeatedString = '';
//
//     for (var i = 1; i <= n; i++) {
//         repeatedString += s;
//     }
//
//     return repeatedString;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 29. Remove String Spaces
        >Simple, remove the spaces from the string, then return the resultant string.
        NOTES:
    */

// var x = 'Hello HolaCiao';
//
// var funzione = noSpace(x);
// console.log(funzione);
//
// function noSpace(x) {
//     var noSpaceStr = '';
//
//     for (var i = 0; i < x.length; i++) {
//         if (x[i] != ' ') {
//             noSpaceStr += x[i];
//         }
//     }
//
//     return noSpaceStr;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 30. Find the smallest integer in the array
        >Given an array of integers your solution should find the smallest integer.
        NOTES:
    */

// var arr = [34, -345, -1, 100];
//
// var funzione = minMax(arr);
// console.log(funzione);
//
// function minMax(arr) {
// 	var minNum = arr[0];
//
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] < minNum) {
// 			minNum = arr[i];
// 		}
// 	}
//
// 	return minNum;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 31. Is n divisible by x and y?
        >Create a function that checks if a number n is divisible by two numbers x AND y.
         All inputs are positive, non-zero digits.
        NOTES:
    */

// var n = 3;
// var x = 3;
// var y = 4;
//
// var funzione = isDivisible(n, x, y);
// console.log(funzione);
//
// function isDivisible(n, x, y) {
//     if ((n % x == 0) && (n % y == 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 32. A Needle in the Haystack
        >Can you find the needle in the haystack?
            Write a function findNeedle() that takes an array full of junk but containing one "needle"
            After your function finds the needle it should return a message (as a string) that says:
            "found the needle at position " plus the index it found the needle, so:
            findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
            should return "found the needle at position 5"
        NOTES:
    */

// var haystack = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
//
// var funzione = findNeedle(haystack);
// console.log(funzione);
//
// function findNeedle(haystack) {
//     for (var i = 0; i < haystack.length; i++) {
//         if (haystack[i] == 'needle') {
//             return "found the needle at position " + i;
//         }
//     }
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 33. SpeedCode #2 - Array Madness
        >Given two integer arrays a, b, both of length >= 1,
         create a program that returns true if the sum of the squares of each
         element in a is strictly greater than the sum of the cubes of each element in b.
        NOTES:
    */

// var a = [4,5,6];
// var b = [1,2,3];
//
// var funzione = arrayMadness(a, b);
// console.log(funzione);
//
// function arrayMadness(a, b) {
//     var squareA = 0;
//     var squareB = 0;
//
//     for (var i = 0; i < a.length; i++) {
//         var squareI = Math.pow(a[i], 2);
//         squareA += squareI;
//     }
//     for (var i = 0; i < b.length; i++) {
//         var squareI = Math.pow(b[i], 3);
//         squareB += squareI;
//     }
//
//     if (squareA > squareB) {
//         return true;
//     } else {
//         return false;
//     }
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 34. Polish alphabet
        >There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
        Your task is to change the letters with diacritics:
        ą -> a,
        ć -> c,
        ę -> e,
        ł -> l,
        ń -> n,
        ó -> o,
        ś -> s,
        ź -> z,
        ż -> z
        and print out the string without the use of the Polish letters.
        NOTES:
    */

// var string = "Jędrzej Błądziński";
//
// var funzione = correctPolishLetters(string);
// console.log(funzione);
//
// function correctPolishLetters(string) {
//     var polishDiacritics = {
//         ą: 'a',
//         ć: 'c',
//         ę: 'e',
//         ł: 'l',
//         ń: 'n',
//         ó: 'o',
//         ś: 's',
//         ź: 'z',
//         ż: 'z'
//     }
//
//     var newString = '';
//
//     for (var i = 0; i < string.length; i++) {
//         var modifyChar = false;
//
//         for (var key in polishDiacritics) {
//             if (string[i] == key) {
//                 newString += polishDiacritics[key]
//                 modifyChar = true;
//             }
//         }
//
//         if (modifyChar == false) {
//             newString += string[i]
//         }
//     }
//
//     return newString;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
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

// var arrayOfSheep = [true,  true,  true,  false,
//                     true,  true,  true,  true ,
//                     true,  false, true,  false,
//                     true,  false, false, true ,
//                     true,  true,  true,  true ,
//                     false, false, true,  true ];
//
// var funzione = countSheeps(arrayOfSheep);
// console.log(funzione);
//
// function countSheeps(arrayOfSheep) {
//     var sheepCount = 0;
//
//     for (var i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i] === true) {
//             sheepCount += 1;
//         }
//     }
//
//     return sheepCount;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 36. Basic Mathematical Operations

        >Your task is to create a function that does four basic mathematical operations.
        The function should take three arguments - operation(string/char), value1(number), value2(number).
        The function should return result of numbers after applying the chosen operation.
         For example:   basicOp('+', 4, 7)         // Output: 11
                        basicOp('-', 15, 18)       // Output: -3
                        basicOp('*', 5, 5)         // Output: 25
                        basicOp('/', 49, 7)        // Output: 7
         The correct answer would be 17.
        NOTES:
    */

// var operation = '+';
// var value1 = 4;
// var value2 = 7;
//
// var funzione = basicOp(operation, value1, value2);
// console.log(funzione);
//
// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2
//             break;
//         case '-':
//             return value1 - value2
//             break;
//         case '*':
//             return value1 * value2
//             break;
//         case '/':
//             return value1 / value2
//             break;
//     }
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 37. Rock Paper Scissors

        >Let's play! You have to return which player won! In case of a draw return Draw!.
        NOTES:
            http://i.imgur.com/aimOQVX.png
    */

// var player1 = 'scissors';
// var player2 = 'paper';
//
// var funzione = game(player1, player2);
// console.log(funzione);
//
// function game(player1, player2) {
//     if (player1 == player2) {
//         return 'Draw!'
//     } else {
//         if (player1 == 'paper') {
//             if (player2 == 'rock') {
//                 return 'Player 1 won!';
//             } else {
//                 return 'Player 2 won!';
//             }
//         } else if (player1 == 'scissors') {
//             if (player2 == 'paper') {
//                 return 'Player 1 won!';
//             } else {
//                 return 'Player 2 won!';
//             }
//         } else if (player1 == 'rock') {
//             if (player2 == 'scissors') {
//                 return 'Player 1 won!';
//             } else {
//                 return 'Player 2 won!';
//             }
//         }
//     }
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
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

// var message = 'Your solution';
//
// var funzione = charFreq(message);
// console.log(funzione);
//
// function charFreq(message) {
//     var dictionary = {};
//
//     for (var i = 0; i < message.length; i++) {
//         var messageI = message[i];
//         // console.log(messageI);
//
//         if (dictionary[messageI] === undefined) {
//             dictionary[messageI] = 0;
//         }
//         dictionary[messageI] += 1;
//     }
//
//     return dictionary;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 39. Century From Year

        >The first century spans from the year 1 up to and including the year 100,
         The second - from the year 101 up to and including the year 200, etc.
          Example:
          centuryFromYear(1705)  returns (18)
          centuryFromYear(1900)  returns (19)
          centuryFromYear(1601)  returns (17)
          centuryFromYear(2000)  returns (20)
    */

// var year = 170005;
// var funzione = century(year);
// console.log(funzione);
//
// function century(year) {
//     if (year <= 100) {
//         return 1;
//     } else {
//         var yearStr = year.toString();
//         var yearLast2Digits = yearStr.slice(-2);                        // .toString(), .slice(), .substring() remember
//         var lengthStrYear = yearStr.length - 2;
//
//         if (yearLast2Digits == 00) {
//             return parseInt(yearStr.slice(0, lengthStrYear));
//         } else {
//             return parseInt(yearStr.slice(0, lengthStrYear)) + 1;
//         }
//
//     }
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 40. Convert number to reversed array of digits

        >Given a random number: You have to return the digits of this number within an array in reverse order.
          Example:
          348597 => [7,9,5,8,4,3]
    */

// var n = 35231;
//
// var funzione = digitize(n);
// console.log(funzione);
//
// function digitize(n) {
//     var numberToString = n.toString();
//     var arrayNumberReversed = [];
//
//     for (var i = numberToString.length - 1; i >= 0; i--) {
//         arrayNumberReversed.push(parseInt(numberToString[i]))
//     }
//
//     return arrayNumberReversed;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------     // DA RIGUARDARE
    /* 41. Count of positives / sum of negatives

        >Given an array of integers.Return an array, where the first element is
        the count of positives numbers and the second element is sum of negative numbers.
        If the input array is empty or null, return an empty array.
          Example:
          For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
    */

// var input = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
//
//
// var funzione = countPositivesSumNegatives(input);
// console.log(funzione);
//
// function countPositivesSumNegatives(input) {
//     if (input === null || input.length == 0) {
//         return [];
//     }
//
//     var countPositiveNumber = 0;
//     var sumNegativeNumber = 0;
//
//     for (var i = 0; i < input.length; i++) {
//         if (input[i] > 0) {
//             countPositiveNumber += 1;
//         } else {
//             sumNegativeNumber += input[i];
//         }
//     }
//
//     var arrayPosNeg = [countPositiveNumber, sumNegativeNumber];
//
//     return arrayPosNeg;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 42. You're a square!

        >Given an integral number, determine if it's a square number:
        Notes:  In mathematics, a square number or perfect square is an integer that is the square of an integer;
                in other words, it is the product of some integer with itself.
                -The tests will always use some integral number, so don't worry about that in dynamic typed languages.
          Example:
                isSquare(-1) returns  false
                isSquare(0) returns   true
                isSquare(3) returns   false
                isSquare(4) returns   true
                isSquare(25) returns  true
                isSquare(26) returns  false
    */

// var n = 26;
//
//
// var funzione = isSquare(n);
// console.log(funzione);
//
// function isSquare(n) {
//     var sqrtN = Math.sqrt(n)
//
//     if (Number.isInteger(sqrtN)) {
//         return true;
//     } else {
//         return false;
//     }
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 43. Expressions Matter

        >Given three integers a ,b ,c, return the largest number obtained after inserting the
         following operators and brackets: +, *, ()
         In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
        Notes:  The numbers are always positive.
                The numbers are in the range (1  ≤  a, b, c  ≤  10).
                You can use the same operation more than once.
                It's not necessary to place all the signs and brackets.
                Repetition in numbers may occur .
                You cannot swap the operands. For instance, in the example below you cannot get expression (1 + 3) * 2 = 8.
        Example:
        With the numbers 1, 2 and 3 , here are some ways of placing signs and brackets:
            1 * (2 + 3) = 5
            1 * 2 * 3 = 6
            1 + 2 * 3 = 7
            (1 + 2) * 3 = 9
        So the maximum value that you can obtain is 9.
    */

// var a = 1;
// var b = 2;
// var c = 3;
//
//
// var funzione = expressionMatter(a, b, c);
// console.log(funzione);
//
// function expressionMatter(a, b, c) {
//     var combination1 = a + b + c;
//     var combination2 = a * b * c;
//     var combination3 = a * b + c;
//     var combination4 = a + b * c;
//     var combination5 = a * (b + c);
//     var combination6 = (a + b) * c;
//
//     var maxNumber = Math.max(
//         combination1,
//         combination2,
//         combination3,
//         combination4,
//         combination5,
//         combination6,
//     );
//     return maxNumber;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 44. Find the Difference in Age between Oldest and Youngest Family Members

        >At the annual family gathering, the family likes to find the oldest living family member’s age
         and the youngest family member’s age and calculate the difference between them.
         You will be given an array of all the family members' ages, in any order.
         The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.
         Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
    */

// var ages = [82, 15, 6, 38, 35];
//
//
// var funzione = differenceInAges(ages);
// console.log(funzione);
//
// function differenceInAges(ages) {
//     var maxAge = Math.max(...ages);
//     var minAge = Math.min(...ages);
//     var differenceAge = maxAge - minAge;
//
//     return [minAge, maxAge, differenceAge];
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 45. Removing Elements

        >Take an array and remove every second element out of that array.
         Always keep the first element and start removing with the next element.
         Notes:  None of the arrays will be empty, so you don't have to worry about that!
         Example:
         myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
    */

// var arr = ['Hello', 'Goodbye', 'Hello Again'];
//
//
// var funzione = removeEveryOther(arr);
// console.log(funzione);
//
// function removeEveryOther(arr) {
//     var newArr = [];
//
//     for (var i = 0; i < arr.length; i = i+2) {
//         newArr.push(arr[i]);
//     }
//
//     return newArr;
// }
//-----------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------
        // 46. Practice creating a binary search algorithm

// var numbers = [96, 58, 24, 30, 18, 32, 90, 63, 87, 56, 8, 15, 86, 74, 80, 99, 60,
//                49, 97, 25, 77, 67, 57, 11, 95, 70, 7, 59, 19, 3, 23, 93, 66, 45,
//                84, 21, 48, 83, 6, 16, 9];
//
// var arrClone = numbers;
// var arrSorted = arrClone.sort(function(a, b){return a-b});
// console.log(arrSorted);
//
// var t0 = performance.now();
//
// var posizioneX = binarySearch(arrSorted, 0, arrSorted.length - 1, 99);
// console.log(posizioneX);
//
// var t1 = performance.now();
// console.log('It took ' + (t1 - t0) + ' milliseconds');

// function binarySearch(arr, l, r, x) {    // return the index of x (recursive)
//     if (r >= l) {
//         var mid = Math.floor(l + (r -l) / 2);
//         if (arr[mid] == x) {
//             return mid;
//         } else if (arr[mid] > x) {
//             return binarySearch(arr, l, mid - 1, x);
//         } else {
//             return binarySearch(arr, mid + 1, r, x);
//         }
//     } else {
//         return -1;
//     }
// }
// function binarySearch(arr, l, r, x) {    // return the index of x (iterative)
//     while (l <= r) {
//         var mid = Math.floor(l + (r -l) / 2);
//         if (arr[mid] == x) {
//             return mid;
//         } else if (arr[mid] > x) {
//             r = mid - 1;
//         } else {
//             l = mid + 1;
//         }
//     }
//     return -1;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 47. Rotate an array

        >Write a function rotate(arr[], d, n) that rotates arr[] of size n by d elements.
          Example:
                Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7    ==>
                arr[] = [3, 4, 5, 6, 7, 1, 2]
    */

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var d = 2;
//
//
// var funzione = leftRotate(arr, d);
// console.log(funzione);
//
// function leftRotate(arr, d) {
//     var arrFirstDElements = [];
//     var restOfArray = [];
//
//     for (var i = 0; i < d; i++) {
//         arrFirstDElements.push(arr[i])
//     }
//     for (var i = d; i < arr.length; i++) {
//         restOfArray.push(arr[i])
//     }
//
//     var rotatedArray = restOfArray.concat(arrFirstDElements);
//
//     return rotatedArray
// }
//-----------------------------------------------------------------------------------------------------
    // 7ku
//-----------------------------------------------------------------------------------------------------
    /* 48. Vowel Count

        >Return the number (count) of vowels in the given string.
         We will consider a, e, i, o, and u as vowels for this Kata.
         The input string will only consist of lower case letters and/or spaces.
    */

// var str = 'abracadabra';
//
//
// var funzione = getCount(str);
// console.log(funzione);
//
// function getCount(str) {
//     var vowelsCount = 0;
//
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//             vowelsCount++;
//         }
//     }
//
//     return vowelsCount;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 49. Mumbling

        >Return the number (count) of vowels in the given string.
         We will consider a, e, i, o, and u as vowels for this Kata.
         The input string will only consist of lower case letters and/or spaces.
        EXAMPLE:
            accum("abcd") -> "A-Bb-Ccc-Dddd"
            accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
            accum("cwAt") -> "C-Ww-Aaa-Tttt"
        NOTES:
            The parameter of accum is a string which includes only letters from a..z and A..Z.
    */

// var s = 'ZpglnRxqenU';
//
//
// var funzione = accum(s);
// console.log(funzione);
//
// function accum(s) {
//     var strAccum = '';
//
//     for (var i = 0; i < s.length; i++) {
//         strAccum += s[i].toUpperCase();
//         var lowerCaseLetter = s[i].toLowerCase();
//
//         for (var j = 0; j <= (i - 1); j++) {
//             strAccum += lowerCaseLetter;
//         }
//
//         if (i < s.length - 1) {
//             strAccum += '-';
//         }
//     }
//
//     return strAccum;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
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

// var numbers = "8 16 -15 21 56 -4";
//
// var funzione = highAndLow(numbers);
// console.log(funzione);
//
//
// function highAndLow(numbers) {
//     var arrayNumbers = numbersStringToArray(numbers);
//
//     var minNumber = arrayNumbers[0];
//     var maxNumber = arrayNumbers[0];
//
//     for (var i = 0; i < arrayNumbers.length; i++) {
//         if (arrayNumbers[i] > maxNumber) {
//             maxNumber = arrayNumbers[i];
//         } else if (arrayNumbers[i] < minNumber) {
//             minNumber = arrayNumbers[i];
//         }
//     }
//
//     return maxNumber + ' ' + minNumber;
// }
//
// function numbersStringToArray(numbers) {        // questa funzione prende una stringa con numeri e la trasforma in un array
//     var arrayNumbers = numbers.split(" ").map(Number);
//
//     return arrayNumbers;
// }
//  // METODO ALTERNATIVO
// function numbersStringToArray(numbers) { // (non volendo usare lo split e volendosi complicare la vita) questa funzione prende una stringa con numeri e la trasforma in un array
//     var arrayNumbers = [];
//     var numberLength = 0;
//
//     for (var i = 0; i < numbers.length; i++) {      // ciclo nella stringa
//
//         if (numbers[i] == '-' || !isNaN(parseInt(numbers[i]))) {    // se l'iesimo e' un meno (-) oppure un numero aumento il contatore di 1
//             numberLength++;
//         } else {                                                    // quando c'e' uno spazio
//             var number = '';
//             for (var k = (i - numberLength); k < i; k++) {          // torno indietro nella stringa 'numbers' di 'numberLength' posizioni
//                 number += numbers[k];                               // e ad ogni ciclo prendo il carattere e lo aggiungo alla variabile numero fino a che non raggiungo 'i'
//             }
//             arrayNumbers.push(parseInt(number));                    // inserisco nell'array il numero
//             numberLength = 0;                                       // resetto il contatore lunghezza numero
//         }
//
//         if (i == numbers.length - 1) {                              // se sono arrivato alla fine della stringa devo fare alcune modifiche al ciclo for
//             var number = '';                                        // dato che la i non coincide piu' con uno spazio
//             for (var k = (i - numberLength + 1); k <= i; k++) {
//                 number += numbers[k];
//             }
//             arrayNumbers.push(parseInt(number));
//             numberLength = 0;
//         }
//     }
//
//     return arrayNumbers;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 51. Square Every Digit

        >Welcome. In this kata, you are asked to square every digit of a number.
        EXAMPLE:
            For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
        NOTES:
            The function accepts an integer and returns an integer
    */

// var num = 9119;
//
//
// var funzione = squareDigits(num);
// console.log(funzione);
//
// function squareDigits(num) {
//     var string = num.toString();
//     var squareDigit = '';
//
//     for (var i = 0; i < string.length; i++) {
//         var num = parseInt(string[i]);
//         var square = Math.pow(num, 2);
//
//         squareDigit += square;
//     }
//
//     return parseInt(squareDigit);
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 52. Descending Order

        >Your task is to make a function that can take any non-negative integer as a argument and return it
         with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
        EXAMPLE:
            Input: 21445 Output: 54421
            Input: 145263 Output: 654321
            Input: 123456789 Output: 987654321
        NOTES:
    */

// var n = 123456789;
//
//
// var funzione = descendingOrder(n);
// console.log(funzione);
//
// function descendingOrder(n) {
//     var nString = n.toString();
//     var tempArray = [];
//
//     for (var i = 0; i < nString.length; i++) {
//         tempArray.push(parseInt(nString[i]));
//     }
//
//     tempArray.sort(function(a, b){return b-a});
//     var arrayJoined = parseInt(tempArray.join(''));
//
//     return arrayJoined;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 53. Shortest Word

        >Simple, given a string of words, return the length of the shortest word(s).
         String will never be empty and you do not need to account for different data types.
        EXAMPLE:
        NOTES:
    */

// var s = 'turns out random test cases are easier than writing out basic ones';
//
//
// var funzione = findShort(s);
// console.log(funzione);
//
// function findShort(s) {
//     var arrayStr = s.split(' ');
//
//     var shortestString = arrayStr[0];
//     for (var i = 0; i < arrayStr.length; i++) {
//         if (arrayStr[i].length < shortestString.length) {
//             shortestString = arrayStr[i];
//         }
//     }
//
//     return shortestString.length;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 54. Remove vowels

        >Your task is to write a function that takes a string and return a new string with all vowels removed.
        EXAMPLE:
            the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
        NOTES:
    */

// var str = "This website is for losers LOL!";
//
//
// var funzione = disemvowel(str);
// console.log(funzione);
//
// function disemvowel(str) {
//     var newStr = '';
//     for (var i = 0; i < str.length; i++) {
//         switch (str[i]) {
//             case 'a':
//                 break
//             case 'A':
//                 break
//             case 'e':
//                 break
//             case 'E':
//                 break
//             case 'i':
//                 break
//             case 'I':
//                 break
//             case 'o':
//                 break
//             case 'O':
//                 break
//             case 'u':
//                 break
//             case 'U':
//                 break
//             default:
//                 newStr += str[i];
//         }
//     }
//
//     return newStr;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 55. Isograms

        >An isogram is a word that has no repeating letters, consecutive or non-consecutive.
         Implement a function that determines whether a string that contains only letters is an isogram.
         Assume the empty string is an isogram.
        EXAMPLE:
            isIsogram("Dermatoglyphics") == true
            isIsogram("aba") == false
            isIsogram("moOse") == false
        NOTES:
    */

// var str = "Dermatoglyphics";
// var str = "moOse";
//
//
// var funzione = isIsogram(str);
// console.log(funzione);
//
// function isIsogram(str) {
//     for (var i = 0; i < str.length; i++) {
//         for (var j = (i + 1); j < str.length; j++) {
//             if (str[i].toLowerCase() == str[j].toLowerCase()) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------
    /* 56. Capitalize words from string

        >Your task is to capitalize each word
        EXAMPLE:
        "How can mirrors be real if our eyes aren't real" ===> "How Can Mirrors Be Real If Our Eyes Aren't Real"
        NOTES:
    */

// var str = "How can mirrors be real if our eyes aren't real";
//
//
// var funzione = capitalize(str);
// console.log(funzione);
//
// function capitalize(str) {
//     var strArray = str.split(' ');
//     var arrayCapitalized = [];
//
//     for (var i = 0; i < strArray.length; i++) {
//         let stringICapitalized = strArray[i][0].toUpperCase() + strArray[i].substring(1);
//         arrayCapitalized.push(stringICapitalized);
//     }
//     var stringCapitalized = arrayCapitalized.join(' ');
//
//     return stringCapitalized;
// }
//-----------------------------------------------------------------------------------------------------







//
