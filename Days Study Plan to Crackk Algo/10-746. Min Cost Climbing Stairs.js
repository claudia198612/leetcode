var minCostClimbingStairs = function(cost) {
    // 初始化
    var dp = [cost[0],cost[1]]

    for(let i = 2;i < cost.length ; i ++){
        dp[i] = Math.min(dp[i - 1] ,dp[i - 2]) + cost[i]
    }
    return Math.min(dp[cost.length - 1], dp[cost.length - 2])
};

cost = [1,100,1,1,1,100,1,1,100,1]

console.log(minCostClimbingStairs(cost))



