var reverseString = function(s) {
    // 不用split，以为它本身就是数组
    var i = 0
    var j = s.length - 1
    while(i < j){
       s = swap(s,i,j)
       i ++
       j --
    }    
    console.log(s)
    return s
};

// 传进来的是 转化成数组的字符串 ， 两个要交换的下标索引
var swap = function(array,i,j) {
    var pos = array[i]
    array[i] = array[j]
    array[j] = pos
    return array
}




var s = ["H","a","n","n","a","h"]
reverseString(s)