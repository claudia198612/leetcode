var wiggleMaxLength = function(nums) {
    // 判断极端情况
    if(nums.length <= 1){
        return nums.length
    }
    var result = 1
    var curDiff = 0
    var preDiff = 0

    for(let i = 0;i < nums.length - 1;i ++){
        curDiff = nums[i+1] - nums[i]
        if((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)){
            result ++
            // 既然是统计峰值，就得满足条件才preDiff = curDiff，不能让preDiff = curDiff在if外面
            preDiff = curDiff

        }
    }
    return result
};

nums = [1,17,5,10,13,15,10,5,16,8]

console.log(wiggleMaxLength(nums))


// 精髓在于：
// 1.默认右边是峰值result = 1
// 2.给左边加一个平滑的preDiff = 0,所以可以针对序列[2,5]，可以假设为[2,2,5],这样它就有坡度了即preDiff = 0
// 3.preDiff = curDiff要放在if语句里面，因为是统计峰值，中间的坡值不值得去计算与赋值



























