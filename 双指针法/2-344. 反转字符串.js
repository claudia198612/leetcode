/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    var temp = ''
    var left = 0
    var right = s.length - 1
    while(left < right){
        temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left ++
        right --
    }
    return s
};

// 2022.11.26日第2题
// 熟练程度：通过
// 注意点：
// 1、需要一个temp来装临时字母