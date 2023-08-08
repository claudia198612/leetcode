

var searchInsert = function(nums, target) {
    var left = 0
    var right = nums.length - 1

    //这里小于等于target,如此，就可以插入到大于right的下标了，并且是小于target就不怕取等号左进右等出不来循环
    while(nums[left] <= target){
        var mid = Math.floor((left + right)/2)

        if(nums[mid] == target){
            return mid
        }

        if(nums[mid] > target){
            right = mid
        }

        else if(nums[mid] < target){
            // 这里一定得是mid+1因为最后想返回mid
            left = mid + 1
        }
    }
    return left
    
};


target = 2
nums=[-1,0,3,5,9,12]
console.log(searchInsert(nums,target))


// 思路：
// 1.初始化left right
// 2.while循环是while(nums[left] <= target)
// 3.经典的相等输出，左+1，右=的移动方式,让left = mid + 1,让right = mid 
// 4.结束循环返回left


// 往往是考虑极限情况就能搞定要不要等于号了







