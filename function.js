// function getTraiangle(base, height) {
//   return base * height / 2;
// }

// console.log('三角形の面積:' + getTraiangle(5, 2));  //三角形の面積:5

//アロー関数
// let getTraiangle = (base, height) => {
//   return base * height / 2;
// };
// console.log('三角形の面積:' + getTraiangle(5, 2));

//scope
// var scope = 'Global Variable';

// function getValue() {
//   var scope = 'Local Variable';
//   return scope;
// }

// console.log(getValue());  //Local Variable
// console.log(scope);       //Global Variable


// var value = 10;
// function decrementValue(value) {
//   value--;
//   return value;
// }

// console.log(decrementValue(100));
// console.log(value);

// var value = [1, 2, 4, 8, 16];
// function deleteElement(value) {
//   value.pop();   //末尾の要素を削除
//   return value;
// }

// console.log(deleteElement(value));    //[1, 2, 4, 8]
// console.log(value);                   //[1, 2, 4, 8]

// function showMessage(value) {
//   console.log(value);
// }

// showMessage();            //undefined
// showMessage('山田');      //山田
// showMessage('山田, 鈴木');  //山田, 鈴木

// function showMessage(value) {
//   if (arguments.length !== 1) {
//     throw new Error('引数の数がまちがっています:' + arguments.length);
//   }
//   console.log(value);
// }

// try {
//   showMessage('山田', '鈴木');
// } catch(e) {
//   window.alert(e.message);
// }

// function sum() {
//   var result = 0;
//   for (var i = 0, len = arguments.length; i < len; i++) {
//     var tmp = arguments[i];
//     if (typeof tmp !== 'number') {
//       throw new Error('引数が数値ではありません:' + tmp);
//     }
//     result += tmp;
//   }
//   return result;
// }

// try {
//   console.log(sum(1, 3, 5, 7, 9));            //25
// } catch(e) {
//   window.alert(e.message);
// }

// function printf(format) {
//   //引数の2番目以降を順番に処理
//   for (var i = 0, len = arguments.length; i < len; i++) {
//     var pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
//     format = format.replace(pattern, arguments[i]);
//   }
//   console.log(format);
// }

// printf('こんにちは、{0}さん。私は{1}です。', '掛谷', '山田');

// function getTraiangle(base = 1, height = 1) {
//   return base * height / 2;
// }
// console.log(getTraiangle(5));  //2.5

// function multi(a, b = a) {
//   return a * b;
// }

// console.log(multi(10, 5));  //50
// console.log(multi(3));      //9 (引数bの値はaと同じ3)

// function multi(a = b, b = 5) {
//   return a * b;
// }
// console.log(multi());  //ReferenceError

// function getTraiangle(base = 1, height = 1) {
//     return base * height / 2;
//   }
//   console.log(getTraiangle(5, undefined));  //2.5

// function show(x, y = 1) {
//   console.log('x = ' + x);
//   console.log('y = ' + y);
// }
// show();     //x = undefined   y = 1

// function required() {
//   throw new Error('引数が不足しています');
// }

// function hoge(value = required()) {
//   return value;
// }
// hoge();   //Error: 引数が不足しています


// function sum(...nums) {
//   let result = 0;
//   for (let num of nums) {
//     if (typeof num !== 'number') {
//       throw new Error('指定値が数値ではありません:' + num);
//     }
//     result += num;
//   }
//   return result;
// }

// try {
//   console.log(sum(1, 3, 5, 7, 9));    //25
// } catch(e) {
//   window.alert(e.message);
// }


// console.log(Math.max(15, -3, 78, 1));    //78
// console.log(Math.max([15, -3, 78, 1]));  //NaN   配列を渡す場合はapplyメソッドを使う
// console.log(Math.max.apply(null, [15, -3, 78, 1]));  //78
// console.log(Math.max(...[15, -3, 78, 1]));    //78

//分割代入
// function getTriangle({base = 1, height = 1 }) {
//   return base * height / 2;
// }
// console.log(getTriangle({ base:5, height:4 }));  //10

//分割代入 特定のプロパティだけ取り出す
function show({name}) {
  console.log(name);
};
let member = {
  mid: 'Y0001',
  name: '山田太郎',
  address: 't_yamada@example.com'
};
show(member);  //山田太郎