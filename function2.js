// function escapeHtml(str) {
//   if (!str) { return ''; }
//   str = str.replace(/&/g, '&amp;');
//   str = str.replace(/</g, '&lt;');
//   str = str.replace(/>/g, '&gt;');
//   str = str.replace(/"/g, '&quot;');
//   str = str.replace(/'/g, '&#39;');
//   return str;
// }

// function e(templates, ...values) {
//   let result = '';
//   for (let i = 0, len = templates.length; i < len; i++) {
//     result += templates[i] + escapeHtml(values[i]);
//   }
//   return result;
// }

// let name = '<"Mario" & \'Luigi\'>';
// console.log(e`こんにちは、${name}さん！`);
//こんにちは、&lt;&quot;Mario&quot; &amp; &#39;Luigi&#39;&gt;さん！


// var y = 'Global';
// function outerFunc() {
//   var y = 'Local Outer';

//   function innerFunc() {
//   var z = 'Local Inner';
//   console.log(z);   //Local Inner
//   console.log(y);   //Local Outer
//   console.log(x);
//   }
//   innerFunc();
// }
// outerFunc();


function closure(init) {
  var counter = init;

  return function() {
    return ++counter;
  }
}

var myClosure = closure(1);
console.log(myClosure());  //2
console.log(myClosure());  //3
console.log(myClosure());  //4