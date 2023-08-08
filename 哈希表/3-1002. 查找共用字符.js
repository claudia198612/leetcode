/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
    // ---获取 words索引0与1的相同字母
    var sameString = hash(words[0],words[1])
    // ---获取 words索引0与1的相同字母

    // ---获取 words索引1之后的相同字母
    for(let i = 2;i < words.length;i ++){
        sameString = hash(sameString,words[i])
    }
    // ---获取 words索引1之后的相同字母
    // ---将字符串sameString转换成数组，储存散装字符
    var sameArray = sameString.split('')
    return sameArray
};

var hash = function(string1,string2) {
    // -----创建两个哈希表，用0填满-----
    var hash1 = new Array(26).fill(0)
    var hash2 = new Array(26).fill(0)
    // -----创建两个哈希表，用0填满-----
    // -----创建一个存放相同字母的表-----
    var sameArray = []
    // -----创建一个存放相同字母的表-----
    // -----将string1,string2用哈希映射到hash1与hash2中------
    for(let i = 0;i < string1.length;i ++){
        hash1[string1.codePointAt(i) - 'a'.codePointAt(0)]++
    }
    for(let i = 0;i < string2.length;i ++){
        hash2[string2.codePointAt(i) - 'a'.codePointAt(0)]++
    }
    // -----将string1,string2用哈希映射到hash1与hash2中------
    // -----通过一起--，判断string1与string2含有的相同字母------
    for(let i = 0;i < 26;i ++){
        while(hash1[i] >= 1 && hash2[i] >= 1){
            hash1[i] --
            hash2[i] --
            sameArray.push(String.fromCharCode(97+i))
        }
    }
    // -----通过一起--，判断string1与string2含有的相同字母------
    // -----将sameArray里散装字母，组成字符串
    var sameString = sameArray.join('')
    // -----将sameArray里散装字母，组成字符串
    return sameString
}
var words = ["cool","lock","cook"]
console.log(commonChars(words))


// 日期：2022.12.4日第2题
// 熟练程度：不会做的级别，解题思路忘记了，里面有很多需要注意的点
// 解题思路：
// 1.写一个hash(string1,string2)函数,返回string1,string2字符串中相同的字符,注意要返回字符，为了好理解
//      (1).创建两个哈希表，用0填满
//      (2).将string1,string2用哈希映射到hash1与hash2中
//      (3).通过一起--，判断string1与string2含有的相同字母
//      (4).将sameArray里散装字母，组成字符串,方便下次传入hash function使用
// 2.写commonChars主函数
//      (1).获取 words索引0与1的相同字母
//      (2).获取 words索引1之后的相同字母
//      (3).将字符串sameString转换成数组，储存散装字符
// 
// 方法：
// 1.将UF-16编码转换成符号---String.fromCharCode(97 + i)
// 
// 拓展：（...）扩展运算符的用途
//      (1).给数组脱去[]
//      (2).给字符串脱去“”