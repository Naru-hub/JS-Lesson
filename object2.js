// var member = function(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.getName = function() {
//     return this.lastname + ' ' + this.firstname;
//   }
// };
// var mem = new member('太郎', '山田');
// console.log(mem.getName());


// var data = 'Global data';
// var obj1 = { data: 'obj1 data'};
// var obj2 = { data: 'obj2 data'};

// function hoge() {
//   console.log(this.data);
// }

// hoge.call(null); //Global data
// hoge.call(obj1); //obj1 data
// hoge.call(obj2); //obj2 data


// function hoge() {
//   var args = Array.prototype.slice.call(arguments);
//   console.log(args.join('/'));
// }
// hoge('Angular', 'React', 'Backbone');   //Angular/React/Backbone


// var Member = function() { };
// Member.prototype.sex = '男';
// var mem1 = new Member();
// var mem2 = new Member();

// console.log(mem1.sex + '|' + mem2.sex);  //男|男
// mem2.sex = '女';
// console.log(mem1.sex + '|' + mem2.sex);  //男|女

// delete mem1.sex;
// delete mem2.sex;
// console.log(mem1.sex + '|' + mem2.sex); //男|男

//オブジェクトリテラルを利用する
// var Member = function(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// Member.prototype = {
//   getName : function() {
//     return this.lastName + ' ' + this.firstName;
//   },
//   toString : function() {
//     return this.lastName + this.firstName;
//   }
// };
