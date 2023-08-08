var Select_Sort = function(nums) {
    //所谓选择排序就是，进行n^2次循环，第一遍循环选出最大值或最小值，放在开头或者结尾..后面循环以此类推，有点像冒泡排序
    //与冒泡排序的不同在于，冒泡排序要与相邻的元素互换位置，直到冒泡到该有的位置
    //选择排序是直接与该有的位置进行位置交换。





    if (nums.length < 2) {
        return nums;
    }
    let len = nums.length;
    let j = 0;
    let index = 0;
    while (j < len) {
        let mini = nums[j];

        for (let i = j; i < nums.length; i++) {
            if (Math.min(mini, nums[i]) == nums[i]) {
                index = i;
            }
            mini = Math.min(mini, nums[i]);

        }
        //mini最小值
        let mid = 0;
        mid = nums[j];
        nums[j] = Math.min(mini, nums[j]);
        nums[index] = mid;
        j++;
    }

    return nums;

};

console.log(Select_Sort([6, 3, 5, 4, -1, -8, -4, 2]));