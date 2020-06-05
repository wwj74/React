
/* 测试正则表达式 
 reg.test(string) 返回值为boolean类型
*/
let testString = 'my test string';
let regTest = /string/;
console.log(regTest.test(testString)); //true

/* 提取变量 
 string.match(reg) 返回值为第一个符合正则的字符
*/
let matchString = 'Any is a animal';
let regMatch = /an/gi;
console.log(matchString.match(regMatch)) // ["An", "an"]

/* 否定的字符集 ^ */
const str = 'aeiou aeiou12 awweiou23'
const allCharsNotVowels = /[^aeiou]/gi; // [" ", "1", "2", " ", "w", "w", "2", "3"]
const allCharsNotVowelsOrNumbers = /[^aeiou0-9]/gi; // [" ", " ", "w", "w"]
console.log(str.match(allCharsNotVowels), str.match(allCharsNotVowelsOrNumbers))


