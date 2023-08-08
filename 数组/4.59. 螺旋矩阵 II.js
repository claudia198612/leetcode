/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    let startX = startY = 0;   // 起始位置
    let loop = Math.floor(n/2);   // 旋转圈数
    let mid = Math.floor(n/2);    // 中间位置，如果n为奇数的话，需要单独给矩阵最中间的位置赋值，如果是偶数就用不上了
    let offset = 1;    // 控制每一层填充元素个数，一圈填完，起始位置变了，右开位置可填-1，因为已经填过了
    let count = 1;     // 更新填充数字 -- res[row][col] = count++ 是先赋值，再++ 
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

    while (loop--) {
        let row = startX, col = startY;
        // 上行从左到右（左闭右开）

        // startY + n - offset -- 两个startY才等于一个offset，就是为了弥补多减的 -- 为了维持左闭右开
        for (; col < n - offset; col++) {
            res[row][col] = count++;
        }
        // 右列从上到下（左闭右开）
        for (; row < n - offset; row++) {
            res[row][col] = count++;
        }
        // 下行从右到左（左闭右开）
        for (; col > startY; col--) {
            res[row][col] = count++;
        }
        // 左列做下到上（左闭右开）
        for (; row > startX; row--) {
            res[row][col] = count++;
        }

        // 更新起始位置
        startX++;
        startY++;

        // 更新offset
        offset += 1;
    }
    // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
    if (n % 2 === 1) {
        res[mid][mid] = count;
    }
    return res;
};
console.log(generateMatrix(7))



// 日期：2022.12.9日第1题
// 熟练程度：没思路，一头雾水，动不了手，画图画图！！

// 本题并不涉及到什么算法，就是模拟过程，但却十分考察对代码的掌控能力
// 注意：坚持循环不变量原则
// 模拟顺时针画矩阵的过程:
//  1.填充上行从左到右
//  2.填充右列从上到下
//  3.填充下行从右到左
//  4.填充左列从下到上
//  5.由外向内一圈一圈这么画下去。
//  这里一圈下来，我们要画每四条边，这四条边怎么画，每画一条边都要坚持一致的左闭右开，或者左开右闭的原则，这样这一圈才能按照统一的规则画下来。

// 此题难点：在画每一条边的时候，一会左开右闭，一会左闭右闭，一会又来左闭右开，岂能不乱。 --- 还是要坚持循环不变量的原则


// 代码思路：
//  1.起始位置：startX startY = 0 --- 控制起始位置，记得我们画图一圈转完，从对角线往下走，就是由startX startY控制
//  2.旋转圈数：loop = Math.floor(n/2);旋转圈数和中间位置一样的
//  3.中间位置：mid = Math.floor(n/2);如果n为奇数的话，需要单独给矩阵最中间的位置赋值，如果是偶数就用不上了
//  4.控制每一层填充元素个数：offset = 1  --- 遵循左闭右开原则，第一层右开1，第二层右开1+一层填过了......
//  5.更新填充数字：count = 1

//  6.进入圈数loop -- 的while循环 --- 循环里面只做3件事
//      a.给row，col赋值startX,startY
//      b.遵循左闭右开原则的四边填充
//          ①.上边左闭右开填充：for (; col < n - offset; col++) --- n - offset 上边从左到右能填充的个数 --- res[row][col] = count++; --- 先赋值，再 ++
//          ②.右边左闭右开填充：for(;row < n - offset ; row ++) --- n - offset 右边从上到下能填充的个数 --- ....
//          ③.下边填充: for(;col > startY; col --) --- > startY 没有 = ，因为最左边格子是开的，下一个循环填充
//          ④.左边填充：for(;row > startX ; row --) --- > startX 没有 =
//      c.更新起始位置、更新offset startY , startX ++ , offset += 1

//  7.循环之外，如果n为奇数(n % 2 === 1)的话，需要单独给矩阵最中间的位置赋值res[mid][mid] = count





