/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    if(nums.length < 3){
        return []
    } 
    nums.sort()
    console.log(nums)
    // 我尼玛真的，sort排序，默认是绝对值排序，升序或者降序排序必须用(a,b) => a - b
    nums.sort((a,b) => a-b)
    console.log(nums)

    let L = nums.length
    for(let i = 0;i < L - 2;i ++){
        if(nums[i] + nums[L - 1] + nums[L - 2] < 0){
            continue
        }
        if(i > 0 && nums[i] === nums[i - 1]){
            continue
        }
        if(nums[i] + nums[i + 1] + nums[i + 2] > 0){
            break
        }
        if(nums[L - 1] + nums[L - 2] + nums[L - 3] < 0){
            break
        }
        let left = i + 1
        let right = L - 1
        while(left < right){
            if(nums[i] + nums[left] + nums[right] === 0){
                res.push([nums[i], nums[left], nums[right]])
                left ++
                right --
                while(left < right && nums[left] === nums[left - 1]){
                    left ++
                }
                while(left < right && nums[right] === nums[right + 1]){
                    right --
                }
            }
            while(left < right && nums[i] + nums[left] + nums[right] > 0){
                right --
            }
            while(left < right && nums[i] + nums[left] + nums[right] < 0){
                left ++
            }
        }
       
    }
    return res
};
let nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]

console.log(threeSum(nums))