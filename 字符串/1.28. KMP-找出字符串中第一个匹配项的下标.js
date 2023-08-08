var getNext = function(str){
    var len = str.length
    var next = new Array(len).fill(0)
    var maxLen = 0//maxLen代表最长前后缀长度
    var right = 1// 右指针，一直往前走，不会回头，初始值为1
    for(right = 1;right < len;right ++){
        // 回退条件
        while(str[maxLen] != str[right] && maxLen > 0){
            maxLen = next[maxLen - 1]
        }
        // 成功条件
        if(str[maxLen] == str[right]){
            maxLen ++
            next[right] = maxLen
        }else{
            // 失败条件
            next[right] = 0
        }
    }
    // 其实返回的是前缀表
    return next
}

var strStr = function(haystack, needle){
    //获取前缀表
    next = getNext(needle)
    // n1是当前比较的模式串下标 -- 取名来自needle参数
    var n1 = 0
    for(let h1 = 0;h1 < haystack.length;h1 ++){
        if(n1 === needle.length){
            return h1 - n1
        }
        if(haystack[h1] == needle[n1]){
            n1 ++
            // 始终要注意n1 === needle.length的reture条件，每次n1变化都要考虑
            if(n1 === needle.length){
                // 这里是需要+1的，因为n1++了，但是h1还没来得及加
                return h1 - n1 + 1
            }
        }else{
            if(n1 == 0){
                continue
            }else{
                n1 = next[n1 - 1]
                // 因为下一次循环h1要++，但是当前换的新的n1没与h1比较,所以h1需要等待一环，就--
                h1 -- 
            }
        }
    }
    return -1

}
console.log(strStr("a","a"))

// 1.什么是KMP? -- KMP这个名字是怎么来的:是由这三位学者发明的：Knuth，Morris和Pratt，取了三位学者名字的首字母。所以叫做KMP
// 2.KMP有什么用? -- KMP主要应用在字符串匹配上 -- 当出现字符串不匹配时，可以通过KMP算法知道一部分之前已经匹配的文本内容，可以利用这些信息避免从头再去做匹配了
// 3.如何避免从头做匹配呢？这里就要提到前缀表和next数组，前缀表（prefix table）其实就是一个next数组，两者都是储存了发生不匹配的应该从哪里开始重新匹配的索引下标
// 4.前缀表有什么作用呢? -- 前缀表是用来记录回退索引的，它记录了模式串与主串(文本串)不匹配的时候，前缀表告诉模式串应该从哪里开始重新匹配
// 5.前缀表里面存储的是什么呢？ -- 其实就是当前字符前面的最长公共前后缀长度

// 6.前缀表可以就是next数组
//  (1).但是使用前缀表回退的时候需要查当前匹配字符的前一个字符的前缀表对应数作为回退索引
//  (2).改良之后的前缀表(前缀表数组右移一位，去掉最右，首位放置0)名为next数组
//  (3).拥有了next数组的意义：不需要再查当前匹配字符的前一个字符的前缀表,而是查询当前匹配字符的next数组就可以找到回退的索引

// 7.前缀表如何用代码实现？为什么不直接实现next表而非要先实现前缀表呢？ -- 只有先找到前缀表才能有next表，当然，不要next表，直接用前缀表也是可以的
//  (1).len = str.length -- len为str的长度
//  (2).next = new Array(len).fill(0) -- 取next名字，但实际上是前缀表，创建长度为len，初始化0
//  (3).maxLen = 0 -- maxLen为最长前后缀长度，也就是需要填进next表的数
//  (4).right = 1 -- 右指针
//  (5).for(right = 1;right < len;right ++) -- for循环，右指针，一直往前走，不回头，初始化为1
//  (6).回退：while(str[maxLen] != str[right] && maxLen > 0)循环 -- 如果最长公共前后缀大于0，并且str[maxLen] 与 str[right]不相等，就回退！
//      a.回退：maxLen = next[maxLen - 1] -- 这就是前缀表，从当前比对字符的前一个字符的前缀表中获取下一次比对的索引(也是最长公共前后缀)
//  (7).若str[maxLen] 与 str[right] 相等： if(str[maxLen] == str[right]) -- 最长公共前后缀+1 -- maxLen++ ,存进next[right]中 -- next[right] = maxLen
//  (8).若str[maxLen] 与 str[right] 不相等(next数组只有相等继续加 和 不相等归零两条路)：else  -- next[right] = 0 -- 一夜回到解放前next[right] = 0 -- 而且下一次循环会进入到回退

// 8.next数组如何得到？ -- 前缀表右移一位，舍弃最右，首位填充0

// 9.KMP算法的实现：
//  (1).首先获取next数组 -- next = getNext(needle)
//  (2).创建h1 = 0 -- 主串下标， 创建n1 = 0模式串下标
//  (3).循环for(let h1 = 0;h1 < haystack.length;h1 ++) -- 遍历主串下标
//  (4).每次遍历有三件事要做
//      a.判断整体匹配成功 -- if(n1 === needle.length) -- 如果n1都超过模式串的长度了，说明已经匹配上了 -- 返回h1 - n1 -- 就是主串中匹配到的首位置
//      b.判断局部匹配成功 -- if(haystack[h1] == needle[n1]) -- 就是当前模式串和主串匹配上了
//          ·n1 就 ++，但是始终要注意n1 === needle.length的reture条件，每次n1变化都要考虑
//          ·这次returen h1 - n1 + 1 -- 因为n1++了，但是h1还没来得及加
//      c.判断局部匹配失败 -- n1寻找前缀表索引 n1 = next[n1 - 1]
//          ·需要注意的是，分情况，如果n1已经是0了，那么next[n1 - 1]不存在，只需要continue进入下一个循环让h1 ++就好
//          ·else --n1不是0的情况 -- n1寻找前缀表索引 n1 = next[n1 - 1]，需要注意：h1 --，因为n1换了新的还没来得及与h1比较就++了
//  (5).return -1 没找到就返回-1


 