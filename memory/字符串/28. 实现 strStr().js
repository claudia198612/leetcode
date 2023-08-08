var strStr = function(haystack, needle) {
    let text_1 = 0
    let pattern_1 = 0
    let nextArr = next(needle)

    while(text_1 < haystack.length && pattern_1 < needle.length){
        if(haystack[text_1] === needle[pattern_1]){
            text_1 ++
            pattern_1 ++
            if(pattern_1 >= needle.length){
                return text_1 - pattern_1
            }
        }else{
            if(nextArr[pattern_1] == -1){
                text_1 ++
            }else{
                pattern_1 = nextArr[pattern_1]
            }
        }
    }


    return -1
    
    
};
var next = function(s) {
    let next = []
    var j = 0
    next.push(j)

    for(let i = 1;i < s.length; i ++){
        while(j > 0 && s[i] !== s[j]){
            j = next[j - 1]
        }
        if(s[i] === s[j]){
            j ++
        }
        next.push(j)
    }
    for(let i = s.length - 1;i > 0;i --) {
        next[i] = next[i-1]
    }
    next[0] = -1
    return next
}

console.log(strStr("leetcode","leeto"))