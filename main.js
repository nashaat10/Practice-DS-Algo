// function reverse(w) {
//   let n = "";
//   for (let i = w.length; i--; i >= 0) {
//     n += w[i];
//   }
//   return n;
// }

// console.log(reverse("ali"));

///////////////////////////////////////////////////////////

// function foo(s) {
//   return s.split("").reverse().join("");
// }

// console.log(foo("mohamed"));

////////////////////////////////////////////////////////////

// function sum(n) {
//   let result = 0;
//   for (let i = 0; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }

// let t1 = Date.now();
// sum(100000000);
// let t2 = Date.now();

// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

// console.log(sum(10));

//////////////////////////////////////////////////////////////////

// function sum2(n) {
//   return (n * (n + 1)) / 2;
// }

// console.log(sum2(6));

//////////////////////////////////////////////////////////////////

// let text = "my name is mohamed ";

// 1)
// res = text.trim().split(" ").reverse();
// console.log(res[0].length);

// 2)
// function foo(text) {
//   res = text.trim().split(" ").reverse();
//   return res[0].length;
// }

// console.log(foo(text));

////////////////////////////////////////////////////////////////////

// function UpDown(n) {
//   for (let i = 0; i <= n; i++) {
//     console.log(i);
//   }

//   console.log("down.....");

//   for (let j = n; j >= 0; j--) {
//     console.log(j);
//   }
// }

// UpDown(10);

////////////////////////////////////////////////////////////

// function pairs(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(i, j);
//     }
//   }
// }

// pairs(2);

/////////////////////////////////////////////////////////////////////////////

// let arr = [1, 2, 3, 4, 5, 10];

// function sumArr(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// console.log(sumArr(arr));

/////////////////////////////////////////////////////////////////////

// let arr = [1, 2, 3];

// function double(arr) {
//   let myArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     myArr.push(2 * arr[i]);
//   }
//   return myArr;
// }
// console.log(double(arr));

//////////////////////////////////////////////////////////////////

// function foo(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!i) {
//       return -1;
//     }
//     return arr[i].last();
//   }
// }

// console.log(foo(arr));
// const arr = [null, {}, 3];

// function test(arr) {
//   if (arr.length == 0) return -1;

//   for (el in arr) {
//     return arr.pop();
//   }
// }
// console.log(test(arr));

///////////////////////////////////////////////////////////////////////////
// arr = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

// function foo(arr) {
//   let mySet = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (mySet.has(arr[i])) {
//       return true;
//     }
//     mySet.add(arr[i]);
//   }
//   return false;
// }

// console.log(foo(arr));

// set is a  special type of object that only allows unique values: if you try to add a value that's already in the set, it will be ignored.

/////////////////////////////////////////////////////////////////////////

// arr = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// arr = [1, 2, 3, 1];
// function foo2(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; i++) {
//       if (arr[i] == arr[j]) {
//         return true;
//       }
//       j++;
//     }
//     return false;
//   }
// }
// console.log(foo2(arr));

///////////////////////////////////////////////////////////////////

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(5, 5));

///////////////////////////////////////////////////////////////////////////////
// let str = " my name ";

// function charCount(str) {
//   const res = str.trim().split(" ").join("");
//   let char = {};
//   for (let i = 0; i < res.length; i++) {
//     if (char[res[i]] > 0) {
//       char[res[i]]++;
//     } else {
//       char[res[i]] = 1;
//     }
//   }
//   return char;
// }
// console.log(charCount(str));

////////////////////////////////////////////////////////////////////////////

// frequency Counter Pattern

// let arr1 = [1, 2, 2, 3, 4];
// let arr2 = [1, 4, 4, 9, 16];

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let freq1 = {};
//   let freq2 = {};
//   for (val of arr1) {
//     freq1[val] = (freq1[val] || 0) + 1;
//   }
//   for (val of arr2) {
//     freq2[val] = (freq2[val] || 0) + 1;
//   }

//   console.log(freq1);
//   console.log(freq2);

//   for (let key in freq1) {
//     if (!(key ** 2 in freq2)) {
//       return false;
//     }
//     if (freq2[key ** 2] !== freq1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(same(arr1, arr2));

////////////////////////////////////////////////////////////////////////////////

// function anagram(str1, str2) {
//   str1 = str1.trim();
//   str2 = str2.trim();
//   if (str1.length != str2.length) {
//     return false;
//   }
//   let ang1 = {};
//   let ang2 = {};

//   for (let val of str1) {
//     ang1[val] = (ang1[val] || 0) + 1;
//   }
//   for (let val of str2) {
//     ang2[val] = (ang2[val] || 0) + 1;
//   }
//   console.log(ang1);
//   console.log(ang2);

//   for (let key in ang1) {
//     if (!(key in ang2)) {
//       return false;
//     }
//     if (ang2[key] !== ang1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// let str11 = " ahmed";
// let str22 = "ahmed";
// console.log(anagram(str11, str22));

/////////////////////////////////////////////////////////////////////////////////////////////

// function valid(first, second) {
//   first = first.trim();
//   second = second.trim();
//   if (first.length !== second.length) {
//     return false;
//   }

//   let lookup = {};

//   for (let letter of first) {
//     lookup[letter] = (lookup[letter] || 0) + 1;
//   }

//   console.log(lookup);

//   for (let letter of second) {
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;
// }

// let one = " mohamed";
// let two = " mohamed";

// console.log(valid(one, two));

//////////////////////////////////////////////////////////////////////////

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// console.log(sumZero([-2, -1, 0, 1, 2]));

////////////////////////////////////////////////////////////////////////////////////

// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// let x = [1, 2, 0, -2, -1, -2, 7];

// console.log(sumZero(x));

////////////////////////////////////////////////////////////////////////////

// function unique(arr) {
//   let mySet = new Set();
//   for (el of arr) {
//     mySet.add(el);
//   }
//   return mySet.size;
// }

// console.log(unique([1, 1, 1, 2, 3, 3]));

// function foo(arr) {
//   let mySet = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (mySet.has(arr[i])) {
//       return true;
//     }
//     mySet.add(arr[i]);
//   }
//   return false;
// }

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// function foo(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 == 0) {
//       arr.push("Fizz");
//     } else if (i % 5 == 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(`${i}`);
//     }
//   }
//   return arr;
// }

// console.log(foo(15));

//1000021
/////////////////////////////////////////////////////////////////
// let x = 1000021;

// function abs(x) {
//   y = x.toString().split("");
//   let arr1 = [];
//   let arr2 = [];

//   if (y[0] == "-") {
//     return false;
//   }
//   for (let i = 0; i < y.length; i++) {
//     arr1.push(y[i]);
//     var res = arr1.join("");
//   }

//   for (let j = y.length - 1; j >= 0; j--) {
//     arr2.push(y[j]);
//     var res2 = arr2.join("");
//   }
//   if (res !== res2) {
//     return false;
//   }

//   return true;
// }

// console.log(abs(x));

///////////////////////////////////////////////////////////////////////////////
// var romanToInt = function (s) {
//   let res = 0;
//   const roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   for (let i = 0; i < s.length - 1; i++) {
//     if (roman[s[i]] < roman[s[i + 1]]) {
//       res -= roman[s[i]];
//     } else {
//       res += roman[s[i]];
//     }
//   }

//   return res + roman[s[s.length - 1]];
// };

///////////////////////////////////////////////////////////////

// digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

// function foo(digits) {
//   return (BigInt(digits.join("")) + BigInt(1))
//     .toString()
//     .split("")
//     .map((el) => el * 1);
// }

// console.log(foo(digits));

///////////////////////////////////////////////////////////////////////

// let binaryStr = "1011";
// let binaryStr2 = "1010";
// let num1 = parseInt(binaryStr, 2); // Convert from binary to integer

// // console.log(num1); // Output: 10

// const x = 11;

// console.log(x.toString(2));

///////////////////////////////////////////////////////////////////////////
// let prices = [7, 6, 4, 3, 1, 7, 9];

// var maxProfit = function (prices) {
//   let smallest = prices[0];
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < smallest) {
//       smallest = prices[i];
//     }
//   }

//   let x = prices.indexOf(smallest);

//   let largest = prices[x];

//   for (j = x + 1; j < prices.length; j++) {
//     if (prices[j] > largest) {
//       largest = prices[j];
//     } else 0;
//   }

//   if (largest === smallest) {
//     return 0;
//   } else if (largest > smallest) {
//     return largest - smallest;
//   }
// };
/////////////////////////////////////////////////////////////////////

// var maxProfit = function (prices) {
//   let buyPrice = prices[0];
//   let profit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     if (buyPrice > prices[i]) {
//       buyPrice = prices[i];
//     }

//     profit = Math.max(profit, prices[i] - buyPrice);
//   }

//   return profit;
// };

// console.log(maxProfit(prices));
/////////////////////////////////////////////////////////////////////

// s = "[]";
// var isValid = function (s) {
//   let arr = [];
//   for (el of s) {
//     arr.push(el);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf("(") < arr.indexOf(")")) {
//       if (arr.indexOf("[") < arr.indexOf("]")) {
//         if (arr.indexOf("{") < arr.indexOf("}")) {
//         }
//       }
//       return true;
//     } else return false;
//   }
// };

// var isValid = function (s) {
//   let arr = [];
//   for (el of s) {
//     arr.push(el);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] === "(" && arr[j] === ")") {
//         if (arr[i] === "[" && arr[j] === "]") {
//           if (arr[i] === "{" && arr[j] === "}") {
//           }
//         }
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
// };

// var isValid = function (s) {
//   let arr = [];
//   for (el of s) {
//     arr.push(el);
//   }
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     if (arr[left] == "(" && arr[right] == ")") {
//       if (arr[left] == "{" && arr[right] == "}") {
//         if (arr[left] == "[" && arr[right] == "]") {
//           left++;
//           right--;
//         }
//       }
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// console.log(isValid(s));

/////////////////////////////////////////////////////////////////////////////////////////

// var list1 = [1, 2, 4];
// var list2 = [1, 3, 4];

// var mergeTwoLists = function (list1, list2) {
//   let list = list1.concat(list2);
//   return list.sort();
// };

// console.log(mergeTwoLists(list1, list2));
/////////////////////////////////////////////////////////////////////////

// var nums = [1, 1, 2];

// function removeD(arr) {
//   let set = new Set(arr);

//   var finalArr = [...set];

//   return finalArr;
// }

// var removeDuplicates = function (nums) {
//   let set = new Set(nums);

//   var finalArr = [...set];

//   return finalArr;
// };
// console.log(removeDuplicates(nums));

// s = "A man, a plan, a canal: Panama";
// s = " ";
// s = "A man, a plan, a canal: Panama";

// var isPalindrome = function (s) {
//   s = s.trim();
//   s = s.replace(/[^a-zA-Z0-9 ]/g, "");

//   let x = s.replace(/\s+/g, "");

//   x = x.toLowerCase();
//   var reverse = [];
//   for (let i = x.length - 1; i >= 0; i--) {
//     reverse.push(x[i]);
//   }

//   let y = reverse.join("");
//   if (x === y) {
//     return true;
//   } else return false;
// };

// var isPalindrome = function (s) {
//   if (s === "" || s === " ") return true;
//   let res = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   if (res === res.split("").reverse().join("")) {
//     return true;
//   }
//   return false;
// };

// var isPalindrome = function (s) {
//   s = s.trim();
//   let res = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let x = res.split("").reverse().join("");
//   return res;

//   if (res === x) {
//     return true;
//   } else {
//     return false;
//   }
//};
//console.log(isPalindrome(s));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var jewels = "aA";
// var stones = "aAAb";
// // Output: 3
// // Example 2:

// // Input: jewels = "z", stones = "ZZ"
// // Output: 0

// var numJewelsInStones = function (jewels, stones) {
//   let freq1 = {};
//   let freq2 = {};

//   for (let val of jewels) {
//     freq1[val] = (freq1[val] || 0) + 1;
//   }
//   for (let val of stones) {
//     freq2[val] = (freq2[val] || 0) + 1;
//   }

//   for (let key in freq1) {
//     if (key in freq2) {
//       return key;
//     }
//     return 0;
//   }
// console.log(freq1);
// console.log(freq2);
// };

// console.log(numJewelsInStones(jewels, stones));

// const unique = (arr) => [...new Set(arr)];
