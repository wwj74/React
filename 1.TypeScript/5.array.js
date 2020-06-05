"use strict";
/* 数组生明 */
// let arr1: number[]  //声明一个数值类型的数组
// let arr2: Array<string> // 声明一个字符串类型的数组
/* 字面量赋值法 */
var arr1 = []; //数字
var arr2 = ['jspang', 'zhaoliyin', 'lingengxin']; //字符串
var arr3 = [true, false,]; //布尔类型
// 注意：在指定数据类型的ts数组中只能存储同一类型的数组元素
/* 构造函数赋值法 */
var arr4 = new Array(1, 2, 3, 4);
var arr5 = new Array('jspang', '张韶涵', '腾格尔');
var arr6 = new Array(true, false);
/* 元祖 */
// 元祖是一种特殊的数组，元祖类型允许表示一个已知元素数量和类型的数组，元素类型可以不相同
// 正确的初始化方法
var arr7 = ['abc', 123];
// 错误的初始化方法
// let arr8: [string, number] = [89, 'error']
