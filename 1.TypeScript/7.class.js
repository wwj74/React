"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Xiaojiejie = /** @class */ (function () {
    function Xiaojiejie(name, age) {
        this.name = name;
        this.age = age;
    }
    Xiaojiejie.prototype.say = function () {
        console.log('小哥哥');
    };
    return Xiaojiejie;
}());
var sister = new Xiaojiejie('鹏哥', 18);
console.log(sister);
sister.say();
/*
public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
private : 私有修饰符，只可以在类内使用private修饰的属性和行为。

*/
var Xiaojiejie2 = /** @class */ (function () {
    function Xiaojiejie2(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Xiaojiejie2.prototype.sayHello = function () {
        console.log('小姐姐好');
    };
    Xiaojiejie2.prototype.sayLove = function () {
        console.log('I Love U');
    };
    return Xiaojiejie2;
}());
var jiejie2 = new Xiaojiejie2('lily', 16, 'girl');
console.log(jiejie2.name);
// console.log(jiejie2.age)
// console.log(jiejie2.sex)
// jiejie2.sayHello();
// jiejie2.sayLove();
/* 使用readonly修饰符将属性设置为只读，只读属性必须在生命时或者构造函数里被初始化 */
var Man = /** @class */ (function () {
    function Man() {
        this.name = 'xiaoxiao';
    }
    return Man;
}());
var man = new Man();
// man.name = 'dada' //无法重新赋值
/* 类的继承 */
/* 注意：TypeScript不支持多重继承。 */
var Jspang = /** @class */ (function () {
    function Jspang(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Jspang.prototype.interest = function () {
        console.log('找小姐姐');
    };
    return Jspang;
}());
var jspangObj = new Jspang('技术胖', 18, 'web');
jspangObj.interest();
var JsShuai = /** @class */ (function (_super) {
    __extends(JsShuai, _super);
    function JsShuai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = 'shuaiqi';
        return _this;
    }
    JsShuai.prototype.zhuanquan = function () {
        console.log('日进斗金');
    };
    return JsShuai;
}(Jspang));
var shuai = new JsShuai('jspang', 45, '写代码');
console.log(shuai.xingxiang);
shuai.zhuanquan();
shuai.interest();
/* 类的重写 关键字：super*/
var JsShuai1 = /** @class */ (function (_super) {
    __extends(JsShuai1, _super);
    function JsShuai1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = '帅气';
        return _this;
    }
    JsShuai1.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('继承了父类的兴趣方法');
    };
    JsShuai1.prototype.zhuanqian = function () {
        console.log('每天再赚一百万');
    };
    return JsShuai1;
}(JsShuai));
var shuai2 = new JsShuai1('jspang', 45, '写代码');
shuai2.interest();
var myHusband = { sex: '男', interest: '看书，做家务' };
console.log(myHusband);
var myHusband1 = { sex: 'nan', interest: '吃饭，睡觉', maibaobao: true };
console.log(myHusband1);
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log('mySearch:', mySearch('高、付、帅'));
/* 命名空间的使用 */
var shuaiGe;
(function (shuaiGe) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '李德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是帅哥刘德华');
        };
        return Dehua;
    }());
    shuaiGe.Dehua = Dehua;
})(shuaiGe || (shuaiGe = {}));
var bajie;
(function (bajie) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '马德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是二师兄马德华');
        };
        return Dehua;
    }());
    bajie.Dehua = Dehua;
})(bajie || (bajie = {}));
var dehua1 = new shuaiGe.Dehua();
var dehua2 = new bajie.Dehua();
dehua1.talk();
dehua2.talk();
