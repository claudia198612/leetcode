//开始函数
var start = function(arr) {
    //创建 left ,right 进入递归
    var left = 0;
    var right = arr.length - 1;
    var Answer = recursion(arr, left, right);
    console.log(Answer);
};

//递归函数：
//作用一：不断切分数组,在切的过程中求左右数组---递归的过程中是切分数组，回溯的过程中是求左右数组
//作用二：不断求跨域子数组
//最后选择出左，右，跨域中最大的数组
var recursion = function(arr, left, right) {
    //递归回溯条件
    if (left == right) {
        return arr[left];
    }
    var mid = Math.floor((left + right) / 2);
    //递归
    var L = recursion(arr, left, mid);
    var R = recursion(arr, mid + 1, right);
    //求跨域子数组最大
    var LR = midSum(arr, left, right);

    //至此，我们得到L左边的最大子数组，R右边的最大子数组，LR跨域子数组
    //我们需要这三个子数组中最大的
    return Math.max(Math.max(L, R), LR);


};

var midSum = function(arr, left, right) {
    var mid = Math.floor((left + right) / 2);

    //从mid位置向左右两边看
    var LSum = 0; //临时储存左边的和
    var LAnswer = arr[mid]; //左边的最大子数组
    var RSum = 0; //临时储存右边的和
    var RAnswer = arr[mid + 1]; //右边的最大子数组

    //循环--从mid为起点寻找左边的最大子数组
    //从mid开始向左循环，每次循环都比较是LSum大还是总的LAnswer大
    for (let i = mid; i >= left; i--) {
        LSum += arr[i];
        if (LAnswer < LSum) {
            LAnswer = LSum;
        }
    }

    //循环--从mid为起点寻找右边的最大子数组
    //从mid开始向右循环，每次RSum都加arr[i]，每次都比较是RSum大还是RAnswer大
    for (let i = mid + 1; i <= right; i++) {
        RSum += arr[i];
        if (RAnswer < RSum) {
            RAnswer = RSum;
        }
    }
    //至此，LAnswer与RAnswer里面装的是从mid为起点，左右边最大的子数组

    //那么跨域最大子数组就是LAnswer+RAnswer
    return LAnswer + RAnswer;


}

start([-2, 1, -3, 4, -1, 2, 1, -5, 4]);