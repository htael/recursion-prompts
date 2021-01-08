/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0){
    return null;
  }
  if (n=== 0) {
    return 1;
  }
  return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  var total = array[0];
  if (array.length === 1) {
    return total;
  }
  return total + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.isArray && array.length === 0) {
    return 0;
  }
  if(!Array.isArray(array)) {
    return array;
  }
  var sum = 0;
  array.forEach(function(item){
    sum += arraySum(item);
  });
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (Math.abs(n) === 1) {
    return false;
  }
  if (Math.abs(n) === 0){
    return true;
  }
  return isEven(Math.abs(n) - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0){
    return n;
  }
  var sum = Math.abs(n) - 1 + sumBelow(Math.abs(n) - 1);
  return (n < 0) ? -1 * sum : sum;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (Math.abs(y - x) < 2) {
    return [];
  }
  if (x > y) {
    var result = [x - 1];
    return result.concat(range(x - 1, y));
  }
  var result = [x + 1];
  return result.concat(range(x+1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0){
    return 1;
  }
  if (exp < 0) {
    var posExp = exp * -1;
    var mult = base * exponent(base, posExp - 1);
    return 1/mult;
  }
  var mult = base * exponent(base, exp - 1);
  return mult;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (Math.abs(n) === 1) {
    return true;
  }
  if (Math.abs(n) < 2 ) {
    return false;
  }
  return powerOfTwo(n/2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return '';
  }
  return string.charAt(string.length - 1) + reverse(string.substring(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();
  if (string.length <= 1) {
    return true;
  }
  return (string.charAt(0) === string.charAt(string.length - 1)) && palindrome(string.substring(1, string.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if  (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return x;
  }
  if (x < 0 && y < 0 && x - y > 0) {
    return x;
  }
  else if (x < 0 && y < 0 && x - y <= 0){
    return modulo(x - y, y)
  }
  else if (x < 0 && y > 0 && x + y > 0) {
    return x;
  }
  else if (x < 0 && y > 0 && x + y <= 0){
    return modulo(x + y, y);
  }
  else if (x > 0 && y < 0 && x + y < 0) {
    return x;
  }
  else if (x > 0 && y < 0 && x + y >= 0) {
    return modulo(x + y, y);
  }
  else if (x > 0 && y > 0 && x - y < 0) {
    return x;
  }
  return modulo(x - y, y);

};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y === 0 || x === 0)  {
    return 0;
  }
  if ((y > 0 && x > 0) || (y > 0 && x < 0)) {
    return x + multiply(x, y - 1);
  }
  return -x + multiply(x, y + 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  } else if (x > 0 && y > 0 && (x - y) >= 0) {
    return 1 + divide(x - y, y);
  } else if (x > 0 && y < 0 && (x + y) >= 0) {
    return -1 + divide(x + y, y);
  } else if (x < 0 && y < 0 && (x - y) <= 0) {
    return 1 + divde(x - y, y);
  } else if (x < 0 && y > 0 && (x + y) <= 0) {
    return -1 + divide(x + y, y);
  } else {
    return 0;
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0){
    return null;
  }
  if (x === 0) {
    return y;
  }
  if (y === 0) {
    return x;
  }
  if (x < y) {
    var rem = y % x;
    return gcd(x, rem);
  }
  var rem = x % y;
  return gcd(y, rem);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if ((str1.length === 0 && str2.length !== 0) || (str2.length === 0 && str1.length !== 0)) {
    return false;
  }
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  return (str1.charAt(0) === str2.charAt(0)) && compareStr(str1.substring(1), str2.substring(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) {
    return [];
  }
  return [str.charAt(0)].concat(createArray(str.substring(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 1) {
    return array;
  }
  return [array[array.length-1]].concat(reverseArr(array.slice(0, array.length - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 1) {
    return [value];
  }
  return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 0) {
    return [];
  }
  if (n % 3 === 0 && n % 5 === 0) {
    return fizzBuzz(n - 1).concat(['FizzBuzz']);
  }
  if (n % 3 === 0) {
    return fizzBuzz(n - 1).concat(['Fizz']);
  }
  if (n % 5 === 0) {
    return fizzBuzz(n - 1).concat(['Buzz']);
  }
  return fizzBuzz(n - 1).concat([n.toString()]);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0){
    return 0;
  }
  if (array[0] === value) {
    return 1 + countOccurrence(array.slice(1), value);
  }
  return countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0){
    return [];
  }
  return[callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var result = 0
  if (typeof obj !== 'object') {
    return 0;
  }
  for (var k in obj){
    if (k === key) {
      result += 1 + countKeysInObj(obj[k], key);
    } else {
      result += countKeysInObj(obj[k], key);
    }
  }
  return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  if (obj === value) {
    return 1;
  }
  if (typeof obj !== 'object' && obj !== value) {
    return 0;
  }
  var count = 0;
  for (var k in obj) {
    count += countValuesInObj(obj[k], value);
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var k in obj){
    if (typeof obj[k] === 'object'){
      replaceKeysInObj(obj[k], oldKey, newKey);
    }
    if (k === oldKey) {
      obj[newKey] = obj[k];
      delete obj[k];
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  }
  if (n === 1) {
    return [0, 1];
  }
  var result = fibonacci(n - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0){
    return [];
  }
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0){
    return [];
  }
  var newInput = array[0].charAt(0).toUpperCase() + array[0].substring(1);
  return [newInput].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  if (typeof obj !== 'object') {
    if (typeof obj === 'number' && obj % 2 === 0) {
      return obj;
    }
    return 0;
  }
  var result = 0;
  for (var k in obj) {
    result += nestedEvenSum(obj[k]);
  }
  return result;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  if (!Array.isArray(array)) {
    return [array];
  }
  var result = [];
  array.forEach(function(item) {
    result = result.concat(flatten(item));
  });
  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (str.length === 0) {
    if (arguments[1] === undefined) {
      return {};
    }
    return obj;
  }
  if (arguments[1] === undefined) {
    var obj = {};
  }
  var lt = str.charAt(0);
  if (obj[lt] === undefined) {
    obj[lt] = 1;
  } else {
    obj[lt]++
  }
  return letterTally(str.substring(1), obj);
}

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list.length <= 1) {
    return list;
  }
  if (list[0] === list[1]) {
    return compress(list.slice(1));
  }
  return [list[0]].concat(compress(list.slice(1)));
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 1) {
    array[0].push(aug);
    return [array[0]];
  }
  array[0].push(aug);
  return [array[0]].concat(augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length <= 1) {
    return array;
  }
  if (array[0] === 0 && array[0] === array[1]) {
    return minimizeZeroes(array.slice(1));
  }
  return [array[0]].concat(minimizeZeroes(array.slice(1)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 1) {
    if (array[0] >= 0) {
      return array;
    }
    return [array[0] * -1];
  }
  if (array.length % 2 === 0) {
    if (array[array.length - 1] >= 0) {
      return alternateSign(array.slice(0, array.length - 1)).concat([array[array.length -1] * -1]);
    }
    return alternateSign(array.slice(0, array.length - 1)).concat([array[array.length -1]]);
  }
  if (array[array.length - 1] >= 0) {
    return alternateSign(array.slice(0, array.length - 1)).concat([array[array.length -1]]);
  }
  return alternateSign(array.slice(0, array.length - 1)).concat([array[array.length -1] * -1]);
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var text = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  }
  //break up input into an array
  //if first element is a number replace is with the string equiv
  //otherwise keep the same element
  //concat the remaining elements in the array
  //return array joined into a string
  var arr = str.split(' ');
  if (arr.length === 1) {
    if (text[arr[0]] !== undefined){
      return text[arr[0]];
    }
    return str;
  }
  if (text[arr[0]] !== undefined){
    return text[arr[0]] + ' ' + numToText(arr.slice(1).join(' '));
  }
  return arr[0] + ' ' + numToText(arr.slice(1).join(' '));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  if (node !== undefined && node.childNodes.length === 0) {
    if (node.tagName === tag.toUpperCase()) {
      return 1;
    } else {
      return 0;
    }
  }
  var result = 0;
  if (node === undefined) {
    var node = document.body;
  }
  if (node.tagName === tag.toUpperCase()) {
    result++;
  }
  var children = node.childNodes;
  for (var i = 0; i < children.length; i++) {
    result += tagCount(tag, children[i]);
  }
  return result;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if (arguments[2] === undefined) {
    min = 0;
    max = array.length - 1;
  }
  if (min === max) {
    if (array[min] === target) {
      return min;
    }
    return null;
  }
  var numElem = max - min + 1;
  if (numElem % 2 === 0) {
    if (array[numElem/2] > target) {
      return binarySearch(array, target, 0, numElem/2 - 1);
    }
    return binarySearch(array, target, numElem/2, max);
  }
  var midIndex = min + Math.floor(numElem/2);
  if(array[midIndex] === target) {
    return midIndex;
  }
  if(array[midIndex + 1] > target) {
    return binarySearch(array, target, min, midIndex - 1);
  }
  return binarySearch(array, target, midIndex + 1, max);
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  if (array.length <= 1) {
    return array;
  }
  var midIndex =  Math.floor(array.length/2);
  var firstHalf = array.slice(0, midIndex);
  var secondHalf = array.slice(midIndex, array.length);
  var sortedFirst = mergeSort(firstHalf);
  var sortedSecond = mergeSort(secondHalf);
  var result = [];
  while (sortedFirst.length > 0 || sortedSecond.length > 0) {
    if (sortedFirst[0] <= sortedSecond[0] || sortedSecond[0] === undefined) {
      result.push(sortedFirst[0]);
      sortedFirst = sortedFirst.slice(1);
    } else {
      result.push(sortedSecond[0]);
      sortedSecond = sortedSecond.slice(1);
    }
  }
  return result;
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (typeof input !== 'object') {
    return input;
  }
  if (Array.isArray(input)) {
    var result = [];
    input.forEach(function(item) {
      result.push(clone(item));
    });
    return result;
  }
  var result = {};
  for (var k in input) {
    result[k] = clone(input[k]);
  }
  return result;
};
