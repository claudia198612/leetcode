var find_maxL = function(s) {
    //求字符串的首尾最大重复串

    //从头网尾
    let head = 0;
    let tail = s.length - 1;
    let pos = head + 1;
    // rem就是pos的小跟班,记录pos位置的
    let rem = 0;
    let count = 0;

    // console.log(arr);
    //去寻找除了s[0] 以外的与s[0]相同的值
    while (pos <= tail) {
        while (pos <= tail && s[pos] != s[head]) {
            pos++;
        }
        //这里的s[pos] == s[head]或者pos <= tail
        while (pos <= tail && s[pos] == s[head]) {
            rem = pos;
            count++;
            pos++;
            head++;
        }
        //这里一定是s[pos] != s[head]了
        //检查pos是否到尾了，如果到了，就存入count，没到count =0;
        if (pos == tail + 1) {
            // console.log(count);
        } else {
            // pos = ++rem不理解，但是先记着
            pos = ++rem;
            head = 0;
            count = 0;
        }

    }
    return count;
};

var find_next = function(s) {

    let maxL = -1;
    let arr_maxL = [];
    //数组初始化
    for (let i = 0; i < s.length; i++) {
        arr_maxL.push(-1);
    }

    for (let i = 1; i <= s.length; i++) {
        let tem_s = s.slice(0, i); //切片开区间，[0,4)不包含第四个，是0,1,2,3
        maxL = find_maxL(tem_s);
        arr_maxL[i - 1] = maxL;
    }
    // 到这里执行完了还不是next数组

    //处理arr_maxL数组，右移一位，首项为-1
    arr_maxL.push(-1); //多加一位
    for (let i = s.length; i > 0; i--) {
        arr_maxL[i] = arr_maxL[i - 1];
    }
    arr_maxL[0] = -1;

    //得到next数组
    return arr_maxL;
}

var KMP = function(text, pattern) {
    //找到pattern的next数组
    let pattern_nextarr = find_next("abaabcac");
    console.log(pattern_nextarr);

    //开始比较主串和模式串
    let main_1 = 0;
    let pattern_1 = 0;

    while (main_1 < text.length && pattern_1 < pattern.length) {
        if (text[main_1] == pattern[pattern_1]) {
            main_1++;
            pattern_1++;
        } else {
            // 重头戏
            if (pattern_nextarr[pattern_1] == -1) {
                main_1++;
            } else {
                pattern_1 = pattern_nextarr[pattern_1];
            }
        }
    }
    if (pattern_1 >= pattern.length) {
        console.log("true")
    } else {
        console.log("false");


    }

}

KMP("acabaabaabcacaabc", "abaabcac");
