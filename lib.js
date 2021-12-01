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

var x = 80;
console.log((x > 70) ? '合格' : '不合格');
