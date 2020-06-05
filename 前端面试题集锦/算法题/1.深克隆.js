/* 
 1. 最便捷实现深克隆的方法
缺点:
-- 他无法实现对函数 、RegExp等特殊对象的克隆
-- 会抛弃对象的constructor,所有的构造函数会指向Object
-- 对象有循环引用,会报错

*/
const newObj = JSON.parse(JSON.stringify(oldObj));

// 实例
// 构造函数
function person(pname) {
  this.name = pname;
}
const Messi = new person('Messi');
// 函数
function say() {
  console.log('hi');
}
const oldObj = {
  a: say,
  b: new Array(1),
  c: new RegExp('ab+c', 'i'),
  d: Messi
};
const newObj = JSON.parse(JSON.stringify(oldObj));

// 无法复制函数
console.log(newObj.a, oldObj.a); // undefined [Function: say]
// 稀疏数组复制错误
console.log(newObj.b[0], oldObj.b[0]); // null undefined
// 无法复制正则对象
console.log(newObj.c, oldObj.c); // {} /ab+c/i
// 构造函数指向错误
console.log(newObj.d.constructor, oldObj.d.constructor); // [Function: Object] [Function: person]

/* 
 2. 面试时简单实现的深克隆
缺点:
-- 他无法实现对RegExp等特殊对象的克隆
-- 会抛弃对象的constructor,所有的构造函数会指向Object
优点: 
-- 可以实现对函数的克隆

 判断数组的方式:
  1. arr instanceof Array
  2. Array.isArray(arr)
  3. Object.prototype.toString.call(arr)

*/
const deepClone = oldObj => {
  if (typeof oldObj !== 'object') return oldObj;
  let newObj = oldObj instanceof Array ? [] : {};
  for (key in oldObj) {
    if (oldObj[key] && oldObj.hasOwnProperty(key)) {
      newObj[key] = typeof oldObj[key] === 'object' ? deepClone(oldObj[key]) : oldObj[key];
    }
  }
  return newObj;
};
// 对函数和数组可以实现克隆
console.log(newObj.a, oldObj.a); //[Function: say]  [Function: say]
console.log(newObj.b[0], oldObj.b[0]); // undefined undefined
// 无法复制正则对象
console.log(newObj.c, oldObj.c); // {} /ab+c/i
// 构造函数指向错误
console.log(newObj.d.constructor, oldObj.d.constructor); // [Function: Object] [Function: person]

/* 
 3. 工作时封装的方法
*/
// 由于要面对不同的对象(正则、数组、Date等)要采用不同的处理方式，我们需要实现一个对象类型判断函数。
const isType = (obj, type) => {
  if (typeof obj !== 'object') return false;
  const typeString = Object.prototype.toString.call(obj);
  let flag;
  switch (type) {
    case 'Array':
      flag = typeString === '[object Array]';
      break;
    case 'Date':
      flag = typeString === '[object Date]';
      break;
    case 'RegExp':
      flag = typeString === '[object RegExp]';
      break;
    default:
      flag = false;
  }
  return flag;
};

// 我们需要通过正则的扩展了解到flags属性等等,因此我们需要实现一个提取flags的函数
const getRegExp = re => {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
};

/**
 * deep clone
 * @param  {[type]} parent object 需要进行克隆的对象
 * @return {[type]}        深克隆后的对象
 */
const clone = parent => {
  // 维护两个储存循环引用的数组
  const parents = [];
  const children = [];

  const _clone = parent => {
    if (parent === null) return null;
    if (typeof parent !== 'object') return parent;

    let child, proto;

    if (isType(parent, 'Array')) {
      // 对数组做特殊处理
      child = [];
    } else if (isType(parent, 'RegExp')) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (isType(parent, 'Date')) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime());
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent);
      // 利用Object.create切断原型链
      child = Object.create(proto);
    }

    // 处理循环引用
    const index = parents.indexOf(parent);

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index];
    }
    parents.push(parent);
    children.push(child);

    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i]);
    }

    return child;
  };
  return _clone(parent);
};
