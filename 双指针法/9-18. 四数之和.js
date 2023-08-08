 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 排序+双循环+双指针
 var fourSum = function(nums, target) {
    var len = nums.length
    var list = []
    // 1、首先是判断极端情况，如果数组长度小于4直接返回[]
    if(nums.length < 4){
        return []
    }
    // 2、排序nums.sort((x,y) => (x-y)),x-y是从小到大,不需要返回值，函数会改变原数组
    nums.sort((x,y) => (x-y))
    // 3、进入第一层循环，i = 0 ; i < len - 3
    for(let i = 0;i < len - 3;i ++){
        // (1) 如果nums[i]与nums[i-1]值重复就continue
        if(i > 0 && nums[i] === nums[i-1]){
            continue
        }
        // (2) 三种该break就break，该continue就continue的操作，最小之和不能大于target，最大之和不能小于target
        if(nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target){
            return list
        }
        if(nums[len-1] + nums[len-2] + nums[len-3] + nums[len-4] < target){
            return list
        }
        if(nums[len-1] + nums[len-2] + nums[len-3] + nums[i] < target){
            continue
        }
        for(let j = i + 1;j < len - 2; j ++){
            // (1) 如果nums[j]与nums[j-1]值重复就continue，去重
            if(j > i + 1 && nums[j] === nums[j-1]){
                continue
            }
            // (2) 两种该break就break，该continue就continue的操作，最小之和不能大于target，最大之和不能小于target
            if(nums[i] + nums[j] + nums[j+1] + nums[j+2] > target){
                break
            }
            if(nums[i] + nums[j] + nums[len-1] + nums[len-2] < target){
                continue
            }
            // 进入双指针
            var left = j + 1
            var right = len - 1
            while(left < right){
                // 成功条件，i,j,left,right == target就list.push([...])
                if(nums[i] + nums[j] + nums[left] + nums[right] === target){
                    list.push([nums[i],nums[j],nums[left],nums[right]])
                    // ---下标变化与去重都在成功条件里面进行---
                    left ++
                    right --
                    // 去重
                    while(left < right && nums[left - 1] === nums[left]){
                        left ++
                    }
                    while(left < right && nums[right + 1] === nums[right]){
                        right --
                    }
                }
               
                
                // 调整大小
                while(left < right && nums[i] + nums[j] + nums[left] + nums[right] < target){
                    left ++
                }
                while(left < right && nums[i] + nums[j] + nums[left] + nums[right] > target){
                    right --
                }
            }
        }
    }
    return list
};

console.log(fourSum([1,0,-1,0,-2,2],0))


// 2022.11.28日第4题
// 熟练程度：忘了思路，不会动手

// 解题思路：
// 1、首先是判断极端情况，如果数组长度小于4直接返回[]
// 2、排序nums.sort((x,y) => (x-y)),x-y是从小到大,不需要返回值，函数会改变原数组
// 3、进入第一层循环，i = 0 ; i < len - 3
    // (1) 如果nums[i]与nums[i-1]值重复就continue，去重
    // (2) 三种该break就break，该continue就continue的操作，最小之和不能大于target，最大之和不能小于target
// 进入第二层循环，j = i + 1;i < len - 2
    // (1) 如果nums[j]与nums[j-1]值重复就continue，去重
    // (2) 两种该break就break，该continue就continue的操作，最小之和不能大于target，最大之和不能小于target
// 双指针left = j + 1,right = len - 1
// 循环条件是left < right
    // 成功条件，i,j,left,right == target就list.push([...]),完了就left ++ ,right --
        // (1)去重---这是最喵的，去重要在成功条件里面完成
    // 调整大小



