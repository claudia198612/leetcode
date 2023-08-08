function next(s) { 
    let next = [];
    let j = 0;

    next.push(j);
    // --- 获得maxL数组 --------
    for (let i = 1; i < s.length; ++i) {
        // 这里一定要用while，因为j的回退是一个连续的过程
        while (j > 0 && s[i] !== s[j])
            j = next[j - 1];
        if (s[i] === s[j])
            j++;
        next.push(j);
    }
    // --- 获得maxL数组 --------

    // --- 获得next数组 --------
    for(let i = s.length - 1;i > 0;i --) {
        next[i] = next[i-1]
    }
    next[0] = -1
    console.log(next)
    return next;
}

function KMP(text,pattern) { 
    let text_1 = 0
    let pattern_1 = 0
    // 拿到了next数组
    let nArr = next(pattern)

    while(text_1 < text.length && pattern_1 < pattern.length){
        if(text[text_1] == pattern[pattern_1]){
            text_1 ++
            pattern_1 ++
        }else{
            if(nArr[pattern_1] == -1){
                text_1 ++
            }else{
                pattern_1 = nArr[pattern_1]
            }
        }
    }
    if(pattern_1 >= pattern.length){
        return true
    }else{
        return false
    }
 }
 console.log(KMP('asdfwefads','fwefa'))