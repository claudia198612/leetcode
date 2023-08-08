var solution = function(isBadVersion) {
   
    return function(n) {
        var left = 1
        var right = n

        while(left < right){
            var mid = Math.floor((left + right)/2)
            if(isBadVersion(mid)){
                right = mid
            }

            else{
                left = mid + 1
            }
            
        }
        return left
    };
};


// 1.这里假定了一定会有第一个false，所以不存在return -1的情况



// 思路：
// 1.定义左右指针，注意 left是从1开始的
// 2.while循环，这里使用的第二种临界条件 while(left < right)，目的是为了最后能return left，并保证left最后与right相等
// 3.若是坏的，就right = mid ,不能mid - 1,因为啊，这是找第一个坏的，如果mid这时是坏的，right = mid - 1万一是好的呢，那这样left和right都是好的，找不到第一个坏的了
// 4.若是好的，就left = mid + 1，一定得+1，因为找第一个坏的，好的还指什么
// 5.跳出循环就return left -- 最后一个好的后面一个就是第一个坏的 

// 注意：while循环有两种结束条件，这里用第一种
// 1.while(left <= right) -- 结束条件是 left > right ,这里是left = right + 1
// 2.while(left < right) -- 结束条件是 left = right 就结束了
// 根据需求，是想最后 left = right 还是 left > right选择


// 极限情况：
// 1.如果只有一个元素，没事，不用进入循环直接返回left, while(left < right)，一定是bad题目规定必有bad



