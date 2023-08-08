var combinationSum = function(candidates, target) {
    var result = []
    var path = []
    candidates.sort((a,b)=>a-b); // 排序
    backtracking(0,0)
    return result
    // j是从j位置开始，sum是总和
        function backtracking (j,sum) { 
            // 递归回溯终止条件
            if(sum === target){
                result.push([...path])
                return
            }

            // 进入for循环
            for(let i = j;i < candidates.length ;i ++){
                // 如果candidates[i]比target - sum大，就break
                if(candidates[i] > target - sum){
                    break
                }
                // 满足条件
                sum += candidates[i]
                path.push(candidates[i])
                backtracking(i,sum)
                sum -= candidates[i]
                path.pop()
            }
         }
};


console.log(combinationSum([2,3,6,7],7))



// 注意：
// 1.一定要排序！ candidates.sort((a,b)=>a-b); // 排序
//      因为后面要  --  如果candidates[i]比target - sum大，就break -- 不排序就会出错
// 2.backtracking(i,sum) 递归的时候i 不 + 1就是代表可以重复选取



