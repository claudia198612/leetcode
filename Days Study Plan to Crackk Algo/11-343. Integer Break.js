var integerBreak = function(n) {
    var dp = Array(n+1).fill(0)
    dp[2] = 1
    for(let i = 3;i <=n;i ++){
        for(let j = 1;j <= i -1;j ++){
            // dp[i]就是一份，(i-j)*j分成俩份，dp[i-j]*j分成三份
            dp[i] = Math.max(dp[i],Math.max((i-j)*j, dp[i-j]*j))
        }
    }
    return dp[n]
};

var n = 10

console.log(integerBreak(n))




