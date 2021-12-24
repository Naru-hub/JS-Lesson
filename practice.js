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

const popString = (str) => {
  return str.slice(0, -1);
}
console.log(popString("apple"));