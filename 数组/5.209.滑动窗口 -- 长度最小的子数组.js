/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start, end
    start = end = 0
    let sum = 0
    let len = nums.length
    let ans = Infinity
    
    while(end < len){
        sum += nums[end];
        while (sum >= target) {
            ans = Math.min(ans, end - start + 1);
            sum -= nums[start];
            start++;
        }
        end++;
    }
    return ans === Infinity ? 0 : ans
};
console.log(minSubArrayLen(7,[2,3,1,2,4,3]))

// 日期：2022.12.10日第1题
// 熟练程度：只会暴力O(n^2)，不会滑动窗口O(n)

// 所谓滑动窗口，就是不断的调节子序列的起始位置和终止位置，从而得出我们要想的结果
// 在暴力解法中，是一个for循环滑动窗口的起始位置，一个for循环为滑动窗口的终止位置，用两个for循环 完成了一个不断搜索区间的过程。
// 那么滑动窗口如何用一个for循环来完成这个操作呢。
// 在本题中实现滑动窗口，主要确定如下三点：
//  1.窗口内是什么？ --- 窗口就是 满足其和 ≥ s 的长度最小的 连续子数组。
//  2.如何移动窗口的起始位置？ --- 窗口的起始位置如何移动：如果当前窗口的值大于s了，窗口起始位置就要向前移动了（也就是该缩小了）。
//  3.如何移动窗口的结束位置？ --- 窗口的结束位置如何移动：窗口的结束位置就是遍历数组的指针，也就是for循环里的索引。

// 代码实现：
//  1.创建元素：
//      ①.起始位置 --- 结束位置start = end = 0 
//      ②.窗口内部元素之和 --- sum = 0
//      ③.数组长度 --- len = nums.length
//      ④.最终答案与返回结果 --- ans = Infinity 无穷大(必须是无穷大，因为后面取Math.min) --- 全局属性Infinity是一个代表无穷大的数值。 

//  2.进入end < len 窗口结束位置始终比数组长度len小的while循环：一共只做三件事
//      a.sum总是加上nums[end]窗口结束位置
//      b.sum值 大于 target值 的  while循环：一共只做三件事
//          ①.最终答案返回值ans = Math.min(ans, end - start + 1); 选最小的
//          ②.sum - 起始位置 
//          ③.start ++ 
//      c.end ++ 窗口结束位置往前走

//  3.返回值ans === Infinity ? 0 : ans














