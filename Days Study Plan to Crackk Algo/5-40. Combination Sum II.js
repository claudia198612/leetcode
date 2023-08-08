var combinationSum2 = function(candidates, target) {
    var path = []
    var result = []
    candidates.sort((a,b) => (a-b));
    // 参数是startIndex,sum
    backtracking(0,0)
    return result

        function backtracking(startIndex,sum){
            // 递归回溯结束条件--满足
            if(sum === target){
                result.push([...path])
                return
            }

            // 不满足条件继续递归
            for(let i = startIndex;i < candidates.length; i ++){
                // 去掉不必要的循环
                if(candidates[i] > target - sum){
                    break
                }

                // 去掉同一层重复使用
                if(i > startIndex && candidates[i] === candidates[i - 1]){
                    continue
                }

                //正常递归
                sum += candidates[i]
                path.push(candidates[i])
                // 递归i 要 + 1,不能重复使用当前元素
                backtracking(i + 1,sum)
                path.pop()
                sum -= candidates[i]
            }
        }
};




console.log(combinationSum2([2,5,2,1,2],5))


























