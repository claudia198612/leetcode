var fourSum = function(nums, target) {
    if(nums.length < 4){
        return []
    }
    let res = []
    nums.sort((a,b) => a - b)
    let L = nums.length
    for(let i = 0;i < L - 3;i ++){
        if(nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target){
            break
        }
        if(nums[L - 1] + nums[L - 2] + nums[L - 3] + nums[L - 4] < target){
            break
        }
        if(nums[i] + nums[L - 1] + nums[L - 2] + nums[L - 3] < target){
            continue
        }
        if(i > 0 && nums[i] === nums[i - 1]){
            continue
        }

        for(let j = i + 1;j < L -2 ; j ++){
            if(nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target){
                break
            }
            if(nums[i] + nums[j] + nums[L - 1] + nums[L - 2] < target){
                continue
            }
            if(j > i + 1 && nums[j] == nums[j - 1]){
                continue
            }
            let left = j + 1
            let right = L - 1
            while(left < right){
                if(nums[i] + nums[j] + nums[left] + nums[right] === target){
                    res.push([nums[i], nums[j], nums[left], nums[right]])
                    left ++
                    right --
                    while(left < right && left > j + 1 && nums[left] == nums[left - 1]){
                        left ++
                    }
                    while(left < right && right < L - 1 && nums[right] == nums[right + 1]){
                        right --
                    }
                }

                while(left < right && nums[i] + nums[j] + nums[left] + nums[right] < target){
                    left ++
                    
                }
                while(left < right && nums[i] + nums[j] + nums[left] + nums[right] > target){
                    right --
                  
                }
            }

        }

    }
    return res
};

var nums = [-2,-1,-1,1,1,2,2]
var target = 0

console.log(fourSum(nums, target))



