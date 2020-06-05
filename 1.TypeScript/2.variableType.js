"use strict";
/* 1. Undefined 类型 */
// const age:number
// console.log(age)  undefined
/* Number 类型 */
var age = 18;
var stature = 1.78;
console.log('age:', age, 'stature:', stature);
/* string类型 */
var jspang = 'jspang is a man ';
console.log('jspang:', jspang);
/* boolean 类型 */
var flagOne = true;
var flagTwo = false;
console.log('flagOne:', flagOne, 'flagOne:', flagOne);
/* enum类型 */
var PERSON;
(function (PERSON) {
    PERSON[PERSON["nan"] = 0] = "nan";
    PERSON[PERSON["nv"] = 1] = "nv";
    PERSON[PERSON["yao"] = 2] = "yao";
})(PERSON || (PERSON = {}));
;
console.log(PERSON.nv); //1 返回的是索引
var MAN;
(function (MAN) {
    MAN["name"] = "\u5C0F\u5F20";
    MAN[MAN["age"] = 14] = "age";
})(MAN || (MAN = {}));
;
console.log('name:', MAN.name); //小张
/* any 类型 */
var anyOne = 123;
anyOne = 'jspang';
anyOne = true;
console.log('anyOne:', anyOne); //true
