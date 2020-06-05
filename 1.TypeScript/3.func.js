"use strict";
/* 形参与实参 */
function searchXiaoJieJie(age) {
    return '找到了' + age + '岁的小姐姐';
}
var ages = 18;
var result = searchXiaoJieJie(ages);
console.log('searchXiaoJieJie:', result);
/* 有可选参数的函数 */
function searchMan(age, face) {
    var yy = '找到了' + age + '岁';
    if (face !== undefined) {
        yy = yy + face;
    }
    return yy + '的小姐姐';
}
var resultMan = searchMan(22, '圆圆脸');
console.log('resultMan:', resultMan);
/* 有默认参数 */
function searchMan1(age, face) {
    if (age === void 0) { age = 18; }
    if (face === void 0) { face = '瘦瘦的'; }
    var yy = '找到了' + age + '岁';
    if (face !== undefined) {
        yy = yy + face;
    }
    return yy + '的小姐姐';
}
var resultMan1 = searchMan1();
console.log('resultMan1:', resultMan1);
/* 有剩余参数 */
function searchMan2() {
    var more = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        more[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < more.length; i++) {
        yy += more[i];
        if (i < more.length - 1) {
            yy += '、';
        }
    }
    return yy + '的小姐姐';
}
var resultMan2 = searchMan2('大长腿', '皮肤白', '身材胖', '脸蛋靓');
console.log('resultMan2:', resultMan2);
