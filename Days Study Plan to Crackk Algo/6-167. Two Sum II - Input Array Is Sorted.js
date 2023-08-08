var twoSum = function(numbers, target) {
    var result = []
//    递归回溯超时，用双指针
    var fast = 0
    var slow = 0
    for(let slow = 0 ;slow < numbers.length - 1;slow ++){
        for(let fast = slow + 1;fast < numbers.length; fast ++){
            if(numbers[slow] + numbers[fast] === target){
                result.push(slow + 1)
                result.push(fast + 1)
            }
        }
    }
    return result
};

var numbers = [-1,0]
var target = -1


console.log(twoSum(numbers,target))











