// 二分搜索：给定一个 升序 数组，在里面找到target,时间复杂度为log n 

var search = function(nums, target) {
    var left = 0
    var right = nums.length - 1

    //必须小于等于 -- 防止单个元素求不出来，不必担心一直进入循环出不来的情况，后面不相等有left = mid + 1和right = mid - 1指定能让left > right的情况出现
    while(left <= right){
        var mid = Math.floor(((left + right) / 2))

        if(nums[mid] == target){
            return mid
        }

        else if(nums[mid] < target){
            left = mid + 1
        }

        else if(nums[mid] > target){
            right = mid - 1
        }
    }

    return -1;

};
target = 5
nums=[5]
console.log(search(nums,target))


// 思路：
// 1.左右指针left right 0 与 length -1 
// 2.while 循环 left <= right 一定要等于
// 3.mid = Math.floor((left + right)/2)
// 4.相等就return mid, nums[mid]大于就right = mid -1 ，小于就 left = mid + 1
// 5.跳出循环就是没找到 ，返回-1

// 注意：while循环有两种结束条件，这里用第一种
// 1.while(left <= right) -- 结束条件是 left > right ,这里是left = right + 1 ---- 用了这个方法啊，就一定要配套left = mid + 1，right = mid - 1，就绝对不能左闭右开或者左开右闭了，因为会跳不出循环
// 2.while(left < right) -- 结束条件是 left = right 就结束了，这个方法可以用左开右闭，或者左闭由开，我是说mid+ — 1的问题