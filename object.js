// var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato'];
// var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];

// console.log(ary1.length);                    //6
// console.log(Array.isArray(ary1));            //true
// console.log(ary1.toString());                //Sato,Takae,Osada,Hio,Saitoh,Sato
// console.log(ary1.indexOf('Sato'));           //0
// console.log(ary1.lastIndexOf('Sato'));       //5

// console.log(ary1.concat(ary2));             //['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato', 'Yabuki', 'Aoki', 'Moriyama', 'Yamada']
// console.log(ary1.join('/'));               //Sato/Takae/Osada/Hio/Saitoh/Sato
// console.log(ary1.slice(1));                 //['Takae', 'Osada', 'Hio', 'Saitoh', 'Sato']

// console.log(ary1.slice(1, 2));              //['Takae']

// console.log(ary1.splice(1, 2, 'Kakeya', 'Yamaguchi'));          //['Takae', 'Osada']  (置き換え対象の要素を取得)
// console.log(ary1);                      //['Sato', 'Kakeya', 'Yamaguchi', 'Hio', 'Saitoh', 'Sato']   (置き換え後の配列)

// console.log(Array.of(20, 40, 60));      //[20, 40, 60]

// console.log(ary1.copyWithin(1, 3, 5));    //['Sato', 'Hio', 'Saitoh', 'Hio', 'Saitoh', 'Sato'] (4~5番目の要素を2~3番目の位置へコピー)
// console.log(ary1);                         //['Sato', 'Hio', 'Saitoh', 'Hio', 'Saitoh', 'Sato'] (コピー後の配列)

// console.log(ary2.fill('Suzuki', 1, 3));   //['Yabuki', 'Suzuki', 'Suzuki', 'Yamada']  (2~3番目の要素を'Suzuki'で置換)
// console.log(ary2);                         //['Yabuki', 'Suzuki', 'Suzuki', 'Yamada'] (置換後の配列)

// console.log(ary1.pop());  //Sato 削除した要素
// console.log(ary1);         //['Sato', 'Hio', 'Saitoh', 'Hio', 'Saitoh'] 削除後の配列

// console.log(ary1.push('Kondo'));   //6   追加後の要素数
// console.log(ary1);                 // ['Sato', 'Hio', 'Saitoh', 'Hio', 'Saitoh', 'Kondo'] 追加後の配列

// console.log(ary1.shift());   //Sato  削除した要素
// console.log(ary1);          //['Hio', 'Saitoh', 'Hio', 'Saitoh', 'Kondo'] 削除後の配列

// console.log(ary1.unshift('Ozawa', 'Kuge'));      //7 追加後の要素数
// console.log(ary1);                               //['Ozawa', 'Kuge', 'Hio', 'Saitoh', 'Hio', 'Saitoh', 'Kondo']   追加後の配列

// console.log(ary1.reverse());                  // ['Kondo', 'Saitoh', 'Hio', 'Saitoh', 'Hio', 'Kuge', 'Ozawa'] 反転後の配列
// console.log(ary1);                            // ['Kondo', 'Saitoh', 'Hio', 'Saitoh', 'Hio', 'Kuge', 'Ozawa'] 反転後の配列

// console.log(ary1.sort());                  //['Hio', 'Hio', 'Kondo', 'Kuge', 'Ozawa', 'Saitoh', 'Saitoh'] ソート後の配列
// console.log();                             //['Hio', 'Hio', 'Kondo', 'Kuge', 'Ozawa', 'Saitoh', 'Saitoh'] ソート後の配列

// // var data = [];
// // data.push(1);
// // data.push(2);
// // data.push(3);
// // console.log(data.pop());   //3
// // console.log(data.pop());   //2
// // console.log(data.pop());   //1

// // var data = [];
// // data.push(1);
// // data.push(2);
// // data.push(3);
// // console.log(data.shift());  //1
// // console.log(data.shift());  //2
// // console.log(data.shift());  //3

// // var data = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh'];

// // console.log(data.splice(3, 2, 'Yamada', 'Suzuki'));    //(2) ['Hio', 'Saitoh']
// // console.log(data);   // ['Sato', 'Takae', 'Osada', 'Yamada', 'Suzuki']

// // console.log(data.splice(3, 2));    //['Yamada', 'Suzuki']    範囲指定しなかったら指定された範囲の要素を削除
// // console.log(data);                 //['Sato', 'Takae', 'Osada']

// // console.log(data.splice(1, 0, 'Tanaka'));    //[]
// // console.log(data);                           //['Sato', 'Tanaka', 'Takae', 'Osada']  置き換えるべき要素数０の場合、引数indexで指定された位置に要素を挿入する

// // var data = [2, 3, 4, 5];
// // data.forEach(function(value, index, array) {
// //   console.log(value * value);              //[4, 9, 16, 25]
// // });

// // var data = [2, 3, 4, 5];
// // var result = data.map(function(value, index, array) {
// //   return value * value;
// // });
// // console.log(result);    //[4, 9, 16, 25]

// // var data = [4, 9, 16, 25];
// // var result = data.some(function(value, index, array) {
// //   return value % 3 === 0;
// // });

// // if (result) {
// //   console.log('3の倍数が見つかりました。');
// // } else {
// //   console.log('3の倍数が見つかりませんでした。');
// // }

// // var data = [4, 9, 16, 25];
// // var result = data.filter(function(value, index, array) {
// //   return value % 2 === 1;
// // });
// // console.log(result);   //[9, 25]

// // var ary = [5, 25, 10];
// // console.log(ary.sort());             // [10, 25, 5]  文字列としてソート
// // console.log(ary.sort(function(x, y) {
// //   return x - y;                      //数値としてソート
// // }));

// // var classes = ['部長', '課長', '主任', '担当'];
// // var members = [
// //  {name: '鈴木清子', clazz: '主任'},
// //  {name: '山口久雄', clazz: '部長'},
// //  {name: '井上太郎', clazz: '担当'},
// //  {name: '和田和美', clazz: '課長'},
// //  {name: '小森雄太', clazz: '担当'},
// // ];
// // console.log(members.sort(function(x, y) {
// //   return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
// // }))