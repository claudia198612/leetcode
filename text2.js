//传的形参实参其实是指向同一片内存空间
//a[1,2,3],与a(nums)中的nums与b(nums)中的nums指向同一片内存区
//如果进行nums[0] = x操作，就是做同一片内存空间中的0号进行操作,
//一个内存区改变,导致a(nums)中的nums与b(nums)中的nums改变

//如果进行的不是nums[0] = x操作，而是在b中进行nums=[4,5,6]操作
//则导致b中的nums指向另一片内存空间[4,5,6],此时b中的nums与a中的nums的内存地址不一样
//无论b怎么改，a中的nums都不会变，除非a中接住了b中的return arr;




var a = function(nums) {
    b(nums);
    console.log(nums);
};

var b = function(nums) {
    nums[0] = 4;
    nums[1] = 5;
    nums[2] = 6;
    //对数组单个区域空间进行改变值，会起到指针的效果，影响其他局部变量


};
//我担心我现在想通了马上就忘记了
a([1, 2, 3]);