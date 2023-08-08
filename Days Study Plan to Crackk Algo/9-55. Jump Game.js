var canJump = function(nums) {
    // 判断极端情况
    if(nums.length === 1) {
        return true
    }

    var cover = 0
    for(let i = 0; i <= cover ;i ++){
        cover = Math.max(cover,i + nums[i]) 
        if(cover >= nums.length - 1){
            return true
        }
    }
    return false
};


nums = [3,0,8,2,0,0,1]

console.log(canJump(nums))

// 贪心算法贪在这里
// 1.cover = Math.max(cover,i + nums[i])  
// 总是选择cover 与 i + nums[i]里面最大的



























