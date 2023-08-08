var moveZeroes = function(nums) {
    var zeroSum = 0
    for(let i = 0;i < nums.length - zeroSum; i ++){
        var j = i
        
        if(nums[j] === 0) {
            while(j < nums.length - zeroSum - 1){
            var pos = nums[j]
            nums[j] = nums[j+1]
            nums[j+1] = pos
            j ++
            }
            zeroSum += 1
            i --
        }
        
    }
    return nums
};

console.log(moveZeroes([0,0,1]))