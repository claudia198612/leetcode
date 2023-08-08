var generateMatrix = function(n) {
    let array = Array(n).fill(0).map(() => Array(n).fill(0))
    let loop = Math.floor(n/2)
    let start = 0

    let count = 1
    while(loop--){
        let i = start
        let j = start
        for(j = start;j < n - start - 1;j ++){
            array[i][j] = count
            count ++
        }

        for(i = start;i < n - start - 1;i ++){
            array[i][j] = count
            count ++
        }

        for(j = n - start - 1;j > start;j --){
            array[i][j] = count
            count ++
        }

        for(i = n - start - 1;i > start;i --){
            array[i][j] = count
            count ++
        }
        start ++
    }
    // 如果loop是单数，中心点睛
    if(n % 2 == 1){
        array[start][start] = n*n
    }
    // 如果是偶数
    return array
};

n = 4

console.log(generateMatrix(n))