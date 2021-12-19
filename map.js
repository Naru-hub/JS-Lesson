// // let m = new Map();
// // m.set('dog', 'ワンワン');
// // m.set('cat', 'ニャー');
// // m.set('mouse', 'チュー');

// // console.log(m.size);          //3
// // console.log(m.get('dog'));    //ワンワン
// // console.log(m.has('cat'));    //true

// // for (let key of m.keys()) {
// //   console.log(key);              //dog, cat, mouse
// // }

// // for (let value of m.values()) {
// //   console.log(value);          //ワンワン,ニャー,チュー
// // }

// // for (let [key, value] of m) {
// //   console.log(value);        //ワンワン,ニャー,チュー
// // }

// // m.delete('dog');
// // console.log(m.size);          //2  キーdogを削除

// // m.clear();
// // console.log(m.size);        //0  すべてのキー/値を破棄

// var m = new Map();
// m.set(NaN, 'hoge');
// console.log(m.get(NaN));  //hoge

// var key = {};
// var m = new Map();
// m.set(key, 'hoge');
// console.log(m.get(key));  //hoge

// // set object
// let s = new Set();
// s.add(10);
// s.add(5);
// s.add(100);
// s.add(50);
// s.add(5);   //同じ値は無視

// console.log(s.has(100)); //true
// console.log(s.size);     //4

// //値を順に取得
// for (let val of s.values()) {
//  console.log(val);        //10, 5, 100, 50
// }
// //値を順に取得
// for (let val of s) {
//   console.log(val);
// }
// //値100を破棄
// s.delete(100);
// console.log(s.size);
// //値をすべて破棄
// s.clear();
// console.log(s.size);

// //assignメソッド
// let pet = {
//   type: 'スノーホワイトハムスター',
//   name: 'キラ',
//   description: {
//     birth: '2014-02-15'
//   }
// };

// let pet2 = {
//   name: '山田キラ',
//   color: '白',
//   description: {
//     food: 'ひまわりのたね'
//   }
// };
// let pet3 = {
//   weight: 42,
//   photo: 'http/www.wings.msn.to/img/ham.jpg',
// };

// Object.assign(pet, pet2, pet3);
// console.log(pet);

