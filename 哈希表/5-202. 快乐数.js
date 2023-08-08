/**
 * @param {number} n
 * @return {boolean}
 */
 var getSum = function (n) {
    let sum = 0;
    while (n) {
        sum += (n % 10) ** 2;
        n =  Math.floor(n/10);
    }
    return sum;
}
var isHappy = function(n) {
    let set = new Set();   // Set() 里的数是惟一的
    // 如果在循环中某个值重复出现，说明此时陷入死循环，也就说明这个值不是快乐数
    while (n !== 1 && !set.has(n)) {
        set.add(n);
        n = getSum(n);
    }
    return n === 1;
};

var n = 19
console.log(isHappy(n))

// 日期：2022.12.4日第4题
// 熟练程度：完全不会动手，代码都是别人写的我来学习---不过学完自己写了一遍，一次通过
// 解题思路：
//  1.写一个函数getSum，计算传入数的每位平方和
//  2.isHappy函数：
//      (1).new Set()--- // Set() 里的数是惟一的
//      (2).while循环n !== 1 && !set.has(n)---如有n===1就true，如果set里有n就说明进入循环了，必定false
//      (3).set.add(n)第一次存入的就是最初没被计算的值，后面存入的都是位数平方和
//      (4).return这里很喵，n === 1,真就返回true，假就返回false
// 
// 运算符：1.幂运算：JavaScript求x平方的方法：使用幂运算符 **，
// 数据结构：let set = new Set();新建一个Set集合
// Set()的方法：
//      1.set.has(n)---set里面有n的话就true，没n就false
//      2.set.add(n)---将n添加到set集合中去











