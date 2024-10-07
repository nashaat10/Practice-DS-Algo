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
