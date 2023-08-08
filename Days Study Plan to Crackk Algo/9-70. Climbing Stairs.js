var climbStairs = function(n) {
    var dp = [0,1,2]
    for(let i = 3;i <= n;i ++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    console.log(dp)
    return dp[n]
};


n = 10

console.log(climbStairs(n))





