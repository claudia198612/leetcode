var partition = function(s) {
    var path = []
    var result = []
    // 0-startIndex深度
    backtracking(0)
    return result

        function backtracking(startIndex){
            // 终止条件--切割到最后一个字符后面了
            if(startIndex >= s.length){
                result.push([...path])
                return 
            }

            // 继续递归回溯--广度
            for(let j = startIndex;j < s.length ; j ++){
                // 判断是否是回文--是就push进去
                if(IsPalindrom(s,startIndex,j)){
                    // splice参数是起始，终止位置
                    var string = s.slice(startIndex,j+1)
                    path.push(string)
                }else{
                    // 不是就continue
                    continue
                }
                backtracking(j+1,)
                path.pop()
            }
        }
};

var IsPalindrom = function (s,startIndex, i) { 
    for(let j = startIndex;j <= i; j++,i--){
        if(s[i] != s[j]){
            return false
        }
    }
    return true
 }

 
console.log(partition("aab"))





// 提示： substr() 的参数指定的是子串的开始位置和长度，因此它可以替代 substring() 和 slice() 来使用。