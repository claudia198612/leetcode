var removeElement = function(nums, val) {
    var fast = 0
    var slow = 0
    var count = 0
    while(fast < nums.length){
        if(nums[fast] !== val){
            nums[slow] = nums[fast]
            slow ++ 
            count ++
        }
        fast ++
    }
    return count
};


nums = [3,2,2,3]
val = 3
console.log(removeElement(nums,val))



























