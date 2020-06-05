class Xiaojiejie {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log('小哥哥');
  }
}

let sister: Xiaojiejie = new Xiaojiejie('鹏哥', 18)
console.log(sister)
sister.say()


/* 
public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
private : 私有修饰符，只可以在类内使用private修饰的属性和行为。

*/
class Xiaojiejie2 {
  public name: string;
  protected age: number;
  private sex: string;
  public constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  protected sayHello() {
    console.log('小姐姐好');
  }
  private sayLove() {
    console.log('I Love U');
  }
}
const jiejie2: Xiaojiejie2 = new Xiaojiejie2('lily', 16, 'girl');
console.log(jiejie2.name)
// console.log(jiejie2.age)
// console.log(jiejie2.sex)
// jiejie2.sayHello();
// jiejie2.sayLove();



/* 使用readonly修饰符将属性设置为只读，只读属性必须在生命时或者构造函数里被初始化 */
class Man {
  public readonly name: string = 'xiaoxiao'
}
let man: Man = new Man();
// man.name = 'dada' //无法重新赋值



/* 类的继承 */
/* 注意：TypeScript不支持多重继承。 */
class Jspang {
  public name: string
  public age: number
  public skill: string
  constructor(name: string, age: number, skill: string) {
    this.name = name
    this.age = age
    this.skill = skill
  }
  public interest() {
    console.log('找小姐姐')
  }
}

let jspangObj: Jspang = new Jspang('技术胖', 18, 'web')
jspangObj.interest()

class JsShuai extends Jspang {
  public xingxiang: string = 'shuaiqi';
  public zhuanquan() {
    console.log('日进斗金')
  }
}
let shuai = new JsShuai('jspang', 45, '写代码');
console.log(shuai.xingxiang)
shuai.zhuanquan();
shuai.interest();



/* 类的重写 关键字：super*/
class JsShuai1 extends JsShuai {
  public xingxiang: string = '帅气';
  public interest() {
    super.interest()
    console.log('继承了父类的兴趣方法')
  }
  public zhuanqian() {
    console.log('每天再赚一百万')
  }
}
let shuai2 = new JsShuai1('jspang', 45, '写代码')
shuai2.interest();


/* 接口 关键字：interface*/
interface Husband {
  sex: string;
  interest: string;
}
let myHusband: Husband = { sex: '男', interest: '看书，做家务' }
console.log(myHusband);

/* 可选参数的接口 */
interface Husband1 {
  sex: string;
  interest: string;
  maibaobao?: boolean
}
let myHusband1: Husband1 = { sex: 'nan', interest: '吃饭，睡觉', maibaobao: true }
console.log(myHusband1);




/* 规范函数类型接口 */
interface SearchMan {
  (source: string, subString: string): boolean
}
let mySearch: SearchMan
mySearch = function (source: string, subString: string): boolean {
  let flag = source.search(subString)
  return (flag != -1)
}
console.log('mySearch:',mySearch('高、付、帅'))



/* 命名空间的使用 */
namespace shuaiGe {
  export class Dehua {
    public name: string = '李德华'
    talk() {
      console.log('我是帅哥刘德华');
    }
  }
}

namespace bajie {
  export class Dehua {
    public name: string = '马德华';
    talk() {
      console.log('我是二师兄马德华')
    }
  }
}

let dehua1: shuaiGe.Dehua = new shuaiGe.Dehua()
let dehua2: bajie.Dehua = new bajie.Dehua()
dehua1.talk();
dehua2.talk();