/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 不使用额外的数组空间
// 元素的顺序可以改变
var removeElement = function(nums, val) {
    var slow = 0
    var fast = 0
    for(fast = 0; fast < nums.length ;fast ++){
        if(nums[fast] !== val){
            nums[slow] = nums[fast]
            slow ++
        }
    }
    return slow
};
// 日期：2022.11.26日第1题
// 熟练程度：写一半写不出来
// 错误原因：
// 1、当fast的小于n就行了，slow的不用管，slow反正没fast的快
// 2、slow不用与val比较，一直接收不等val的fast就行了
// 3、乱用while，这里应该用for循环就简单多了
// 4、slow最后返回的时候不必+1，因为上一次+1了，但是fast就结束了，那个+1没用来接值
// 画面：
// 1、fast与slow在同一初始位置
// 2、fast开始比较val,不等就将val扔给slow接着，slow就++，fast等for循环结束再++
// 3、fast 将不等val扔给slow接着，slow就++，fast等for循环结束再++
