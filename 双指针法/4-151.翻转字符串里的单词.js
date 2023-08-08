/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    // --重点代码s.trim()--//
    s = s.trim()
    // --重点代码s.trim()--//
    s = reversstr(s)
    // ----将单词以空格划分为单个元素，存储在数组中----
    s = s.split(' ')
    // ----将单词以空格划分为单个元素，存储在数组中----

    // ----去除数组里面所有的空格-----
    s = space(s)
    // ----去除数组里面所有的空格-----

    var len = s.length
    for(var i = 0;i < len;i ++){
        s[i] = reversstr(s[i])
    }
    // --用join(' ')的方式，把没有空格的数组，连接起来---
    s = s.join(' ')
    // --用join(' ')的方式，把没有空格的数组，连接起来---
    console.log(s)
    return s
};

// 额外写一个将一个字符串每一个字母都反一下的函数
var reversstr = function (str) {
    // 但凡是涉及到字符串内部操作，都要转换成数组
    str = str.trim()
    if(str.length == 0){
        return ''
    }
    var temp = ''
    var left = 0
    var right = str.length - 1
    str = Array.from(str)

//---- 重点代码----
    while(left < right){
        temp = str[left]
        str[left] = str[right]
        str[right] = temp
        left ++ 
        right -- 
    }
//---- 重点代码----

    str = str.join('')
    return str
  }
// 额外写一个函数用来除空格
  var space = function(nums){
    var slow = 0
    var count = 0
    var fast = 0
    for(fast = 0;fast < nums.length;fast ++){
        if(nums[fast] != ''){
            count ++
            nums[slow] = nums[fast]
            slow ++
        }
    }
    // ------------------------重点代码fast - slow---------//
    nums.length = nums.length - (fast - slow)
    // ------------------------重点代码fast - slow---------//
    return nums
  }
  reverseWords("the sky is blue")



//   2022.11.26日第4题
// 熟练程度：会动手，不通过，细节处理不好
// 思路：大字符串总反转一次，大字符串空格分开，每个小字符串也反转一次
// 1、首先去除总字符串两边空格trim
// 2、写个额外的反转字符串的函数，也要去除两边空格trim
// 3、先把总字符串送进2去反转
// 4、split总字符串成数组
// 5、写个去除中间空格的函数space
// 6、把总数组送进5去除中间space
// 7、把数组每个元素送进2中反转