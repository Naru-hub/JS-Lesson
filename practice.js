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

// const object = {};

//29
// const object = {name: "Bob", "age": 20};

// const getObjectName = object => object.name;
// console.log(getObjectName(object));

// object.name = 20;
// console.log(getObjectName(object));

// object.weight = "50kg";

// delete obj.name;

//33
// const object = { 
//   name: "Bob", 
//   age: 20,
//   hobby: ['reading', 'shopping'],
// }

// console.log(object.hobby[0]);  //reading
// console.log(object.hobby[1]);  //shopping

//34
// const pet = {
//   owner: "Bob",
//   animals: ["dog", "cat"],
//   getAnimals: function() {
//     return this.owner + " has a " + this.animals[0] + " and a " + this.animals[1] + ".";
//   }
// }

// console.log(pet.getAnimals());  //Bob has a dog and a cat.

//35
// const library = {
//   openHour: "7am ~ 10pm"
// }
// console.log(library); //{openHour: '7am ~ 10pm'}
// library.openHour = "8am ~ 9pm";
// console.log(library); //{openHour: '8am ~ 9pm'}

//36
// const library = {
//   book: {
//     author: "Tom Sawyer",
//     year: "11/12/2021"
//   }
// }
// library.book.year = "10/22/1876"

//38
// const arr = [];
// const arr = ["りんご", "みかん", "いちご"];
// console.log(arr[1]); //みかん

// const arr = ["りんご", "みかん", "いちご"];
// arr[2] = "もも";
// console.log(arr[2]); //もも

//42
// const arr = ["りんご", "みかん", "いちご"];
// arr.push("すいか");
// console.log(arr);  //['りんご', 'みかん', 'いちご', 'すいか']  配列の最後に追加(push)

// const arr = ["りんご", "みかん", "いちご"];
// arr.pop();
// console.log(arr); //['りんご', 'みかん'] 配列の最後の要素削除(pop)

// const arr = ["りんご", "みかん", "いちご"];
// arr.unshift("すいか");
// console.log(arr);  //['すいか', 'りんご', 'みかん', 'いちご'] 配列の最初に追加(unshift)

//45
// const arr = ["りんご", "みかん", "いちご"];
// arr.shift();
// console.log(arr);//['みかん', 'いちご'] 配列の最初の要素削除(shift)

// const arr = ["りんご", "みかん", "いちご"];
// arr.reverse();
// console.log(arr);  //['いちご', 'みかん', 'りんご']  配列を逆順にする(reverse)

//47
// const array = ["りんご", "みかん", "いちご"];
// const answer = array.indexOf("みかん");
// console.log(answer);  //1

// const array = ["りんご", "みかん", "いちご"];
// const answer = array.includes("りんご");
// console.log(answer); //true

//49
// const array = ["りんご", "みかん", "いちご"];
// const answer = array.slice(1, 3);
// console.log(answer);  //['みかん', 'いちご'] 2番目と3番目の要素からなる配列

//50
// const array = ["りんご", "みかん", "いちご"];
// const answer = array.splice(2,1);
// console.log(array);



