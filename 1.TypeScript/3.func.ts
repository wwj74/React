
/* 形参与实参 */
function searchXiaoJieJie(age: number): string {
  return '找到了' + age + '岁的小姐姐'
}
const ages: number = 18
const result: string = searchXiaoJieJie(ages)
console.log('searchXiaoJieJie:', result)

/* 有可选参数的函数 */
function searchMan(age: number, face?: string): string {
  let yy: string = '找到了' + age + '岁';
  if (face !== undefined) {
    yy = yy + face
  }
  return yy + '的小姐姐'
}
const resultMan: string = searchMan(22, '圆圆脸')
console.log('resultMan:', resultMan);

/* 有默认参数 */
function searchMan1(age: number = 18, face: string = '瘦瘦的'): string {
  let yy: string = '找到了' + age + '岁';
  if (face !== undefined) {
    yy = yy + face
  }
  return yy + '的小姐姐'
}
const resultMan1: string = searchMan1()
console.log('resultMan1:', resultMan1);


/* 有剩余参数 */
function searchMan2(...more: string[]): string {
  let yy: string = '找到了';
  for (let i = 0; i < more.length; i++) {
    yy += more[i];
    if (i < more.length - 1) {
      yy += '、'
    }
  }
  return yy + '的小姐姐'
}
const resultMan2: string = searchMan2('大长腿', '皮肤白', '身材胖', '脸蛋靓')
console.log('resultMan2:', resultMan2);