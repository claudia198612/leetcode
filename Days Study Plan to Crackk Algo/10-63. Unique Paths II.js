var uniquePathsWithObstacles = function(obstacleGrid) {
    m = obstacleGrid.length 
    n = obstacleGrid[0].length
    var dp = Array(m).fill().map(item => Array(n).fill(0))

    for(let i = 0;i < m && obstacleGrid[i][0] === 0;i ++) {
        dp[i][0] = 1
    }
    for(let i = 0;i < n && obstacleGrid[0][i] === 0;i ++) {
        dp[0][i] = 1
    }

    for(let i = 1;i < m ; i ++){
        for(let j = 1;j < n;j ++){
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i-1][j] + dp[i][j - 1]
        }
    }
    return dp[m-1][n-1]
    
};

obstacleGrid =[[1,0]]

console.log(uniquePathsWithObstacles(obstacleGrid))
