/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //经典动态规划问题



    //遍历数组中的每一个元素
    //每次遍历
    //PreSum 初始为 0，MaxSum初始为nums[i];
    //判断PreSum+x 与x谁大 -- 若x大则PreSum = x，若PreSum + x 大，则PreSum = PreSum + x;
    //判断MaxSum 与 PreSum谁大 -- 若MaxSum大,MaxSum = MaxSum，若PreSum大，MaxSum = PreSum;

    //若PreSum是负数，则PreSum+x一定小于x
    let PreSum = 0;
    let MaxSum = nums[0];

    nums.forEach(x => {
        PreSum = Math.max(PreSum + x, x);
        MaxSum = Math.max(MaxSum, PreSum);
    });
    return MaxSum;
};