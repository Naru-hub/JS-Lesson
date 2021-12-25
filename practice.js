// const twice = (num) => {
//   return num * 2;
// }
// console.log(twice(3)); //6

// const addOne = (num) => {
//   return num + 1;
// }
// console.log(addOne(3));

// const getLength = (str) => {
//   return str.length;
// }
// console.log(getLength("apple"));

// const judgeLength = (str) => {
//   if (str.length >= 10) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(judgeLength("apple"));

// const isString = (parameter) => {
//   return typeof parameter === "string";
// }
// console.log(isString(3));  //false

// const getSum = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(getSum(3, 2));

// const getFullName = (firstName, lastName) => {
//   return firstName + ' ' + lastName;
// }
// console.log(getFullName("Tanaka", "Taro"));

//10
// const getFirstChar = (str) => {
//   return str.slice(0,1);
// }
// console.log(getFirstChar("apple"));

// const popString = (str) => {
//   return str.slice(0, -1);
// }
// console.log(popString("apple"));

// const toggleBoolean = (valid) => {
//   if (valid === true) {
//     return false;
//   } else {
//     return true
//   }
// }
// console.log(toggleBoolean(false));

// const arr = ["apple", "orange", "melon"];
// const answer = (arr) => {
//   return arr.join(",");
// }
// console.log(answer(arr));

// const answer = "あいうえお"; 

// let answer = "あいうえお";  //再代入するときはlet
// answer = "かきくけこ";
// console.log(answer);

//18
// const str1 = "あいうえお";
// const str2 = "かきくけこ";
// const answer = str1 + str2;
// console.log(answer);

// const string = "あいうえお";
// const str = string.replace('あ', 'お');
// console.log(str);

// const string = "あああああ";
// string.replace(/あ/g, "お");

//21
// const str = "あいうえお";
// const answer = str.split('');
// console.log(answer);
//別解
// const str = 'あいうえお';
// const answer = [...str];
// console.log(answer);
