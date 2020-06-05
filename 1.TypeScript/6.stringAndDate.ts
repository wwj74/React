/* 
字符串方法
  str.indexOf(subStr) 从头查找字符串位置 返回的是字符串从前到后的位置
  str.lastIndexOf(subStr) 从尾部查找字符串位置 返回的是字符串从前到后的位置
  str.substring(startIndex,[endIndex]) 字符串截取 
  str.replace(subStr,newStr) 字符串替换

 */

/* 字符串 */
let jspang1: string = '技术胖'
let jspang2: String = new String('jspang.com')
console.log(jspang1, jspang2);
//技术胖 [String: 'jspang.com']



/* 日期 */
/* 1. 不传递参数 */
let date1: Date = new Date();
/* 2. 传递一个整数 */
let date2: Date = new Date(1000);  //整数代表的是距离1970-01-01 00:00:00 的毫秒数
/* 3.传递一个字符串 */
let date3: Date = new Date('2018-09-03 13:34:22')
let date4: Date = new Date('2018-09-03 13:34:22') //两种声明方式，结果是一样的
/* 4.传递表示年月日时分秒的变量 */
// let dte5: Date = new Date(year, month, day, hours, minutes, seconds, ms)

console.log('date1:', date1, 'date2:', date2, 'date3:', date3, 'date4:', date4)
//date1: 2019-04-11T09:59:10.972Z date2: 1970-01-01T00:00:01.000Z date3: 2018-09-03T05:34:22.000Z date4: 2018-09-03T05:34:22.000Z




/* 正则表达式 */
/* 构造函数法 */
let reg1: RegExp = new RegExp('jspang');
let reg2: RegExp = new RegExp('jspang', 'gi')
console.log(reg1, reg2); //   /jspang/ /jspang/gi

/* 字面量法 */
let reg3: RegExp = /jspang/;
let reg4: RegExp = /jspang/gi;
console.log(reg3, reg4)

/* 常用方法 
 /i 不区分(ignore)大小写；/g (全文global查找出现的所有匹配字符)；m 多(more)行匹配；/gi(全文查找、忽略大小写)
*/
let reg5: RegExp = /jspang/gi;
let str1: string = 'jspang.com';
let res: boolean = reg5.test(str1)
console.log(res)






