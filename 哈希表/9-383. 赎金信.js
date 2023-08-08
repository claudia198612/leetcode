/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    var hashArray = new Array(26).fill(0)
    for(let i of magazine){
        hashArray[i.codePointAt(0) - 'a'.codePointAt(0)] ++
    }

    for(let j of ransomNote){
        hashArray[j.codePointAt(0) - 'a'.codePointAt(0)] --
    }
    for(let i = 0;i < 26;i ++){
        if(hashArray[i] < 0 ){
            return false
        }
    }
    return true
};
var ransomNote = "aa"
var magazine = "aab"
console.log(canConstruct(ransomNote,magazine))

// 日期：2022.12.5日第2题
// 熟练程度：有思路，一次通过

// 解题思路：
//  1.创建一个26位的数组，每位填充0
//  2.将magazine中的每个字母按照UF-16的哈希映射入表中，表中存储的是对应字符出现的次数
//  3.将ransomNote中的每个字母按照UF-16的哈希映射在表中 --
//  4.出现负数则false ,没有负数就是true,检查是否每个都大于等于0

// 属性：
//  1.'a'.codePointAt(0) --- 将字符转换成UF-16码 ----- 相反用法：String.fromCharCode(UF-16码)-将UF-16码转换成字符













