# 正则表达式
## 正则方法
+ test() --> reg.test(string)
+ match() --> string.match(reg)
> 注意两个方法的参数不同
-----------------------------
## 正则匹配
### 忽略大小写 i
``` js
  const caseInsensitiveRegex = /ignore case/i;
  const testString = 'We use the i flag to iGnOrE CasE';
  caseInsensitiveRegex.test(testString); // true
```

### 提取字符中所有匹配项 g

### 通配符 .
* 使用通配符.作为任何字符的占位符
```js
  // To match "cat", "BAT", "fAT", "mat"
  const regexWithWildcard = /.at/gi;
  const testString = "cat BAT cupcake fAT mat dog";
  const allMatchingWords = testString.match(regexWithWildcard); // ["cat", "BAT", "fAT", "mat"]
```

### 匹配多重可能性的字符 []
```js
// Match "cat" "fat" and "mat" but not "bat"
const regexWithCharClass = /[cfm]at/g;
const testString = "cat fat bat mat";
const allMatchingWords = testString.match(regexWithCharClass); // ["cat", "fat", "mat"]
```

### 否定的字符集 ^
```js
const str = 'aeiou aeiou12 awweiou23'
const allCharsNotVowels = /[^aeiou]/gi;
const allCharsNotVowelsOrNumbers = /[^aeiou0-9]/gi;

```
> 匹配字符串中不是aeiou这几个字母的剩下内容,包括空格

### 匹配连续出现大于等于1次的字符 +
### 匹配连续出现大于等于0次的字符 *
### 懒惰匹配 ?
```js
const testString = "catastrophe";
const greedyRexex = /c[a-z]*t/gi;
const lazyRegex = /c[a-z]*?t/gi;

testString.match(greedyRexex); // ["catast"]
testString.match(lazyRegex); // ["cat"]

```
> 找出符合给定要求的字符串最小部分




