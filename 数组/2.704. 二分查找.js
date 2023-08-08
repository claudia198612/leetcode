var search = function(nums, target) {
   var left = 0
   var right = nums.length - 1

   while(left <= right){
    var middle = Math.floor((left + right) / 2)
    if(nums[middle] < target){
        left = middle + 1
    }else if(nums[middle] > target){
        right = middle - 1
    }else{
        return middle
    }
   }

   return -1
};
console.log(search([5],5))


// 日期：2022.12.7日第2题
// 熟练程度：思路完全不清晰，不会动手，看答案
// 二分查找条件：数组有序，升序或者降序

// 二分查找复杂度O(logn) ， 暴力解法复杂度O(n)

// 解题思路:
//  1. 给数组从小到大排序
//  2.定义left = 0， right = nums.length - 1从两边向中间的指针

//  3.进入 left < right 的循环中 --- 循环只做两件事
//      a.计算出middle中间值 ：middle = Math.floor((left + right) / 2)
//      b.判断nums[middle] 与 target大小
//          ①.nums[middle] < target --- left = middle + 1
//          ②.nums[middle] > target --- right = middle - 1
//          ③.nums[middle] = target --- return middle --- 找到！！！

// 注意：
//  1.parseInt与Math.floor效果一样！parseInt((left + right) / 2) 与 Math.floor((1 + 2.5) / 2)的效果是一样的
//  2.二分法时间复杂度：O(logn) ， 暴力解法时间复杂度：O(n)