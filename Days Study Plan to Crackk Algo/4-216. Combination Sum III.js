var result = []

var path = []
var combinationSum3 = function(k, n) {
    result = []
    backtracking(k,n,1)
    return result
};

var backtracking = function(k,n,start) {
    var sum1 = sum(path)
    // 递归回溯终止条件
    if(sum1 === n && path.length === k){
        result.push([...path])
        return
    }

    if(path.length === k) {
        return 
    }
    
    // 注意不能有大于9的数
    for(let i = start ;i <= (n - (sum1) > 9 ? 9 : n - (sum1)); i ++) {
        path.push(i)
        // 继续向下递归
        backtracking(k,n,i + 1)
        path.pop()

    }
}


var sum = function (path) { 
    var sum1 = 0
    for(let i = 0;i < path.length; i ++){
        sum1 += path[i];
    }
    return sum1
 }


 
console.log(combinationSum3(2,18))































