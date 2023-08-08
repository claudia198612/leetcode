var maxProfit = function(prices) {
    var curDiff = 0
    var result = 0
    // flag = 0时，未买入，flag = 1时，已买入待卖出
    var flag = 0
    for(var i = 0;i < prices.length ;i ++){
        curDiff = prices[i+1] - prices[i]
        if(curDiff > 0 && flag == 0){
            result -= prices[i]
            flag = 1
        }

        if(curDiff < 0 && flag == 1){
            result += prices[i]
            flag = 0 
        }
        // 默认到最后如果没卖出就一定要卖出
    }
    if(flag){
        i --
        result += prices[i]
    }

    return result
};


prices = [7,6,4,3,1]

console.log(maxProfit(prices))

// 注意：
// 1.一定要考虑左右端点的情况


