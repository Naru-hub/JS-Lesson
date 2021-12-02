// const TAX = 1.08;
// var price = 100;
// console.log(price * TAX);

// window.alert('こんにちは、JavaScript！\n頑張って勉強しましょうね。');

// let name = '鈴木';
// let str = `こんにちは、鈴木さん。
// 今日もいい天気ですね`;

// console.log(str);

// var data = ['JavaScript', ['jQery', 'prototype.js'], 'Ajax', 'ASP.NET'];
// console.log(data[1][0]);

// var obj = { x:1, y:2, z:3};
// console.log(obj.x);
// console.log(obj['x']);

// let data = [56, 40, 26, 82, 19, 17, 73, 99];
// let [x0, x1, x2, x3, x4, x5, x6, x7] = data;
// console.log(x0);
// console.log(x1);
// console.log(x2);
// console.log(x3);

// let data = [56, 40, 26, 82, 19, 17, 73, 99];
// let [x0, x1, x2, ...other] = data
// console.log(x0);
// console.log(x1);
// console.log(x2);
// console.log(other);

// let book = { title: 'Javaポケットリファレンス', publish: '技術評論社', price: 2680};
// let { price, title, memo = 'なし'} = book;

// console.log(title);
// console.log(price);
// console.log(memo);

// let book = { title: 'Javaポケットリファレンス', publish: '技術評論社', price: 2680,
//  other: { keywd: 'Java SE 8', logo: "logo.jpg"}};
// let { title, other, other: { keywd } } = book;

// console.log(title);
// console.log(other);
// console.log(keywd);

// let book = { title: 'Javaポケットリファレンス', publish: '技術評論社'};
// let { title: name, publish: company } = book;

// console.log(name);
// console.log(company);

// var x = 80;
// console.log((x > 70) ? '合格' : '不合格');

// var msg = '';
// msg = msg || 'こんにちは、世界！';
// console.log(msg);

// var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
// console.log(delete ary[0]);
// console.log(ary);

// var obj = {x:1, y:2};
// console.log(delete obj.x);
// console.log(obj.x);

// var obj2 = {x:obj, y:2};
// console.log(delete obj2.x);
// console.log(obj);

// var data1 = 1;
// console.log(delete data1);
// console.log(data1);

// data2 = 10;
// console.log(delete data2);
// console.log(data2);

// var num = 1;
// console.log(typeof num);

// var str = 'こんにちは';
// console.log(typeof str);

// var flag = true;
// console.log(typeof flag);

// var ary = ['JavaScrript', 'Ajax', 'ASP.NET'];
// console.log(typeof ary);

// var obj = {x:1, y:2};
// console.log(typeof obj);

// var x = 15;
// if (x >= 10) {
//   console.log('変数xは10以上です');
// } else {
//   console.log('変数xは10未満です');
// }

// var x = 30;
// if (x >= 20) {
//   console.log('変数xは20以上です');
// } else if (x >= 10) {
//   console.log('変数xは10以上です');
// } else {
//   console.log('変数xは10未満です');
// }

// var x = 20;
// if (x >= 10) {
//   if (x >= 20) {
//     console.log('変数xは20以上です。');
//   } else {
//     console.log('変数xは10以上20未満です。');
//   }
// } else {
//   console.log('変数xは10未満です。');
// }

// var x = 15;
// if (x >= 10)
//     console.log('変数xは10以上です。');
// else
//     console.log('変数xは10未満です。');

var x = 1;
var y = 2;
if (x === 1) {
  if (y === 1) {
    comsole.log('変数x,yは共に1です。');
  }
} else {
  console.log('変数xは1ではありません。')
}