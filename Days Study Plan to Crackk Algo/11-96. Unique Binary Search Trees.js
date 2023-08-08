var numTrees = function(n) {
    var dp = Array(n+1).fill(0)
    dp[0] = 1;
    dp[1] = 1;

    for(let i = 2;i <= n;i ++){
        for(j = 1;j <= i;j ++){
            dp[i] += dp[j-1] * dp[i-j]
        }
    }
    return dp[n]
};

n = 5

console.log(numTrees(n))



