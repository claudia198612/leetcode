//求l到r的最大字段和
var MaxSum = function(arr, left, right) {
    //如果left = right，那么最大字段和就是它本身
    //如果不止一个元素，那么就需要去找三个和
    //最后返回三个和中最大的
    if (left == right) {
        return arr[left];
    } else {
        var mid = Math.floor((left + right) / 2);
        var L = MaxSum(arr, left, mid); //左边的最大子数组
        var R = MaxSum(arr, mid + 1, right); //右边的最大子数组

        //跨域最大子数组
        var middle = middleSum(arr, left, right);

    }
    return Math.max(Math.max(L, R), middle);

}

var middleSum = function(arr, left, right) {
    //求跨域最大子数组
    //站在mid的位置，分别向左和向右寻找最大子数组
    //最后返回两个子数组相加就是跨域最大子数组
    var mid = Math.floor((left + right) / 2);
    var SumL = 0; //临时存放左边Sum
    var AnswerL = arr[mid]; //左边数组最大值
    var SumR = 0; //临时存放右边Sum
    var AnswerR = arr[mid + 1]; //右边数组最大值

    //站在mid，不断循环向left计算和
    for (let i = mid; i >= left; i--) {
        SumL += arr[i];
        if (SumL > AnswerL) {
            AnswerL = SumL;
        }
    }

    //站在mid，不断循环向right计算和
    for (let i = mid + 1; i <= right; i++) {
        SumR += arr[i];
        if (SumR > AnswerR) {
            AnswerR = SumR;
        }
    }
    //最后返回，两个最大子数组相加的和
    return AnswerL + AnswerR;


}

var start = function(arr) {
    var left = 0;
    var right = arr.length - 1;
    Answer = MaxSum(arr, left, right);
    console.log(Answer);
}

start([-2, 1, -3, 4, -1, 2, 1, -5, 4]);