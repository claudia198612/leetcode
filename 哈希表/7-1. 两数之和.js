/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // map映射解法
    var map = {}
    for(let i = 0;i < nums.length ;i ++){
        
        if(map[target - nums[i]] !== undefined){
            // 返回的是俩索引
            return [i,map[target - nums[i]]]
        }
        map[nums[i]] = i
    }
    return []
};

console.log(twoSum([3,3],6))


// 日期：2022.12.4日第5题
// 熟练程度：第一次自己想的思路错了--错因当成三数之和四数之和，第二次对了--没排序双循环
// 注意：这个和三数之和，四数之和不一样，不能打乱顺序


// 解题思路：
// 1.没排序双循环就不说了，相当于暴力解法了
// 2.map映射法--map也是不允许有俩相同元素
//      (1).var map = {}创建一个map
//      (2).遍历nums的length
//      (3).判断map[target - nums[i]] !== undefined------map[target - 当前遍历元素]不为null就对了！
//      (4).尤其注意map[nums[i]] = i,一定要放在判断后面，否则会出现重复元素被覆盖，索引也重复

// 注意：这是左边存放值，右边存放索引的map,有些奇怪