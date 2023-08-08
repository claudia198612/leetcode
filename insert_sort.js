var Insert_Sort = function(nums) {
    //插入排序--循环数组，将每个元素都与之前元素对比，再放进之前元素中该有的位置
    //插入排序与选择排序的区别：
    //选择排序需要每次选出最大或最小元素然后与该有位置相交换
    //而插入排序是-循环到哪个数组位置就为该数在之前的位置里寻找最佳位置

    //循环从i = 1;的时候拿取数据，存储current
    //pre存储i-1下标
    //while循环，把nums[pre]与current比较，nums[pre]大就pre--，还把前面的元素往后移;
    //完成while循环时,pre+1就是current最适合的位置；赋值
    //pre - current
    //循环从i = 1;开始
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i]; //值
        let pre = i - 1; //索引

        while (pre >= 0 && nums[pre] > current) {
            nums[pre + 1] = nums[pre];
            pre--;
        }
        pre++;
        nums[pre] = current;


    }

    return nums;

};

console.log(Insert_Sort([6, 3, 5, 4, -1, -8, -4, 2]));