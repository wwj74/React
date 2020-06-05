/* 1. Undefined 类型 */
// const age:number
// console.log(age)  undefined

/* Number 类型 */
const age: Number = 18;
const stature: Number = 1.78;
console.log('age:', age, 'stature:', stature)

/* string类型 */
const jspang: string = 'jspang is a man '
console.log('jspang:', jspang)

/* boolean 类型 */
const flagOne: boolean = true;
const flagTwo: boolean = false;
console.log('flagOne:', flagOne, 'flagOne:', flagOne)

/* enum类型 */
enum PERSON { nan, nv, yao };
console.log(PERSON.nv)  //1 返回的是索引

enum MAN { name = '小张', age = 14 };
console.log('name:',MAN.name)  //小张

/* any 类型 */
let anyOne:any = 123;
anyOne = 'jspang';
anyOne = true;
console.log('anyOne:',anyOne)  //true

