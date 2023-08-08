var uniquePaths = function(m, n) {
    var dp = Array(m).fill().map(item => Array(n))
    // 因为是从0开始的，最后要m-1 与 n-1
    for(let i = 0;i < m;i ++){
        dp[i][0] = 1
    } 
    for(let i = 0;i < n;i ++){
        dp[0][i] = 1
    }

    for(let i = 1;i < m;i ++){
        for(let j = 1; j < n;j ++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};

var m = 3
var n = 2

console.log(uniquePaths(m,n))


