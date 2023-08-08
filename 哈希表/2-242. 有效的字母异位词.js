/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    // ----判断极端情况，如果s.length !== t.length直接就返回false
    if(s.length !== t.length){
        return false
    }
    // ----判断极端情况，如果s.length !== t.length直接就返回false

    // ---创建26格哈希表用0填充---
    var table = new Array(26).fill(0)
    // ---创建26格哈希表用0填充---
    for(let i = 0;i < s.length ; i ++){
        // -----将字符串s中的字符转换成0-25之间的数字，++表示存入----
        table[s.codePointAt(i) - 'a'.codePointAt(0)] ++
        // -----将字符串s中的字符转换成0-25之间的数字，++表示存入----
    }

    for(let i = 0;i < t.length ; i ++){
        // -----将字符串t中的字符转换成0-25之间的数字，--表示与s抵消----
        table[t.codePointAt(i) - 'a'.codePointAt(0)] --
        // -----将字符串t中的字符转换成0-25之间的数字，--表示与s抵消----
    }

    for(let i = 0;i < 26 ; i ++){
        // -----检查抵消之后的，有没有非0数，有就false，无就true----
        if(table[i] !== 0){
            return false
        }
        // -----检查抵消之后的，有没有非0数，有就false，无就true----
    }
    return true
};

// 日期：2022.12.4日第1题
// 熟练程度：codePointAt函数忘记了，解题思路不清晰
// 解题思路：
// 1.判断极端情况，如果s.length !== t.length直接就返回false
// 2.创建一个26格哈希表，用0填充:var table = new Array(26).fill(0)
// 3.将字符串s中的字符转换成0-25之间的数字，++表示存入
// 4.将字符串t中的字符转换成0-25之间的数字，--表示与s抵消
// 5.检查抵消之后的，有没有非0数，有就false，无就true

// 用到的方法:
// 1.t.codePointAt(i)----codePointAt
//    t是一个字符串，i代表字符串索引，某个字符，codePointAt将字符转换成UF-16码
//    codePointAt是ES6中的内容，能转换更大的字符编码，charCodeAt就显得力不从心

// 2.创建一个26格哈希表，用0填充:var table = new Array(26).fill(0)
