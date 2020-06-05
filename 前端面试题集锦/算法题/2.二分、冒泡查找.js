/* 1. 二分查找 
时间复杂度: 对数复杂度 o(log2^n)
*/
const binarySearch = (arr, target) => {
  let min = 0;
  let max = arr.length - 1;
  let mid = Math.floor(max / 2);
  while (min <= max) {
    if (target > arr[mid]) {
      min = mid + 1;
    } else if (target < arr[mid]) {
      max = mad - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

/* 2. 冒泡排序
时间复杂度: 平方复杂度 o(n²)
*/
// 最初版
const bubbleSort = arr => {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
};

// 改进版
// 设置一标志性变量pos,用于记录每趟排序中最后一次进行交换的位置。
// 由于pos位置之后的记录均已交换到位,故在进行下一趟排序时只要扫描到pos位置即可。
bubbleSort1 = arr => {
  console.time('改进后冒泡排序耗时');
  var i = arr.length - 1; //初始时,最后位置保持不变
  while (i > 0) {
    var pos = 0; //每趟开始时,无记录交换
    for (var j = 0; j < i; j++)
      if (arr[j] > arr[j + 1]) {
        pos = j; //记录交换的位置
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    i = pos; //为下一趟排序作准备
  }
  console.timeEnd('改进后冒泡排序耗时');
  return arr;
};

// 进阶版
// 传统冒泡排序中每一趟排序操作只能找到一个最大值或最小值,我们考虑利用在每趟排序中进行正向和
// 反向两遍冒泡的方法一次可以得到两个最终值(最大者和最小者) , 从而使排序趟数几乎减少了一半。
const bubbleSort2 = arr => {
  var low = 0;
  var high = arr.length - 1; //设置变量的初始值
  var tmp, j;
  console.time('2.改进后冒泡排序耗时');
  while (low < high) {
    //正向冒泡,找到最大者
    for (j = low; j < high; ++j) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      --high; //修改high值, 前移一位
    }
    //反向冒泡,找到最小者
    for (j = high; j > low; --j) {
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
      ++low; //修改low值,后移一位
    }
  }
  console.timeEnd('2.改进后冒泡排序耗时');
  return arr;
};
