var rotate = function(nums, k) {
    if(nums.length <= 1){
        return nums
    }
    var n = nums.length
    k = k % n
    
    reverse(nums,0,n - 1)
    reverse(nums,0,k - 1)
    reverse(nums,k,n - 1)

    return nums
    
};

function reverse(nums, i, j) {

    while(i < j){
        swap(nums,i,j)
        i ++
        j --
    }

    
    return nums
}

function swap(nums, i, j) {
    var n = nums[i]
    nums[i] = nums[j]
    nums[j] = n
    return nums
}

var nums = [-1,-100,3,99]
var k = 2
console.log(rotate(nums,k))
