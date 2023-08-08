/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    var beflen = s.length - 1
    // 字符串不用转换，也可以
    var space = 0
    for(var i = 0;i < s.length;i ++){
        if(s[i] == ' '){
            space ++
        }
    }    
    // 扩展字符串
    for(var i = 0;i < space*2 ;i ++){
        // 扩展字符串就这么简单，不要太麻烦
        s += ' '
    }
    var nowlen = s.length - 1
    var slow = nowlen
    var fast = beflen
    var sArr = Array.from(s)
    for(fast = beflen;fast >= 0; fast --){
        // 还是要转换成数组，不然操作不了
        if(sArr[fast] != ' '){
            sArr[slow] = sArr[fast]
            slow --
        }else{
    //----------- 核心代码----------
            sArr[slow] = '0'
            sArr[slow-1] = '2'
            sArr[slow-2] = '%'
            slow -= 3
        }
    //------------------------------
    }
    // 这个join要接收一下，join不会改变原数组
    sArr = sArr.join('')
    return sArr
};
replaceSpace("We are happy.")

// 2022.11.26日第3题
// 熟练程度：不会动手，有思路

// 步骤：
// 1、s首先是字符串，但凡是涉及到字符串内元素进行更改的，要先转换为数组在进行操作
//   方法一、 var nums = s.split("");  split和join一样，都要接收一下，不会返回原数组
//   方法二、strArr = Array.from(s)    是from不是form;
// 2、统计空格个数，有两种方法，一种直接
//   方法一、 ==" "
//   方法二、用s.indexOf(" ", space)，space是从某个下标开始查询，包括space,s.indexOf(" ", space)的返回值也是下标，所以space要接收上一个indexOf
// 3、扩充字符串s += ' '
// 4、最后记得join，join也是不改变原数组，通过返回值接收