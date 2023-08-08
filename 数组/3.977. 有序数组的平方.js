var sortedSquares = function(nums) {

    for(let i = 0;i < nums.length;i ++){
        var num = nums[i] * nums[i]
        nums[i] = num
    }
    return nums.sort((x,y) => (x - y))

};

console.log(sortedSquares([-4,-1,0,3,10]))
// 日期：2022.12.5日第3题
// 熟练程度：有思路，但是代码不优雅

// 代码风格：
//  1.首先创建一个临时存放数,循环遍历使得num = nums[i]*nums[i]
//  2.让nums[i] = num
//  3.要排序，return 要优雅， return nums.sort((x,y) => (x - y))
//  4.注意：x - y是升序，y - x是降序