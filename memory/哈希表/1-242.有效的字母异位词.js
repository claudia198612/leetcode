// 暴力解法
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    s = Array.from(s)
    t = Array.from(t)

    s = s.sort().join("")
    t = t.sort().join("")
    
    for(let i = 0;i < s.length;i ++){
        if(s[i] !== t[i]){
            return false
        }
    }
    return true
};




// var isAnagram = function(s, t) {
//     // 1、先要把字符串变成数组才能
//     let s1 = Array.from(s)
//     // 2、sort影响原数组，join不改变原数组，当sort和join一起用的时候，因为最后一个是join所以sort改变了原数组而join部分没有改变原数组
       // 3、join括号里面必须要""引号
//     console.log(s1.sort().join(""))
    
// };

console.log(isAnagram("asdwdfz"))