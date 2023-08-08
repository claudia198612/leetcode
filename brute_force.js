var brute_force = function(arr) {
    var len = arr.length;
    var Temp_Array = [];

    var TL = 0;
    //两层循环
    for (let i = 0; i <= len - 1; i++) {
        Temp_Array.push(arr[i])
        var Temp_Sum = arr[i];
        for (let j = i + 1; j <= len - 1; j++) {
            Temp_Sum += arr[j];
            Temp_Array.push(Temp_Sum);
        }
    }
    //最后完成时，Temp_Array里面全部都是子数组的和，寻找里面最大的就好
    // console.log(Temp_Array);
    var max = Temp_Array[0];
    for (let i = 0; i < Temp_Array.length; i++) {
        if (max < Temp_Array[i]) {
            max = Temp_Array[i];
        }

    }
    console.log(max);

}

brute_force([-2, 1, -3, 4]);