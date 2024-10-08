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

// let str11 = " mohamed";
// let str22 = "ahmed";
// console.log(anagram(str11, str22));

//////////////////////////////////////////////////////////////////////////////////////
