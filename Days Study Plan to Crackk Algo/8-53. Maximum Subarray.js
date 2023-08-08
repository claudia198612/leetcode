var maxSubArray = function(nums) {
    var count = 0
    var result = -Infinity
    for(let i = 0;i < nums.length;i ++){
        count += nums[i]
        if(count > result){
            result = count
        }
        if(count < 0){
            count = 0
        }
    }
    return result
};


nums = [5,4,-1,7,8]
console.log(maxSubArray(nums))

// 注意点：
// 1.var result = -Infinity 得是无穷小
//      因为[1] = 1,[-1] = -1不是0



























