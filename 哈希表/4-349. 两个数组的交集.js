/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    // -----创建两个哈希表，1001位存储0-----
    var hash1 = new Array(1001).fill(0)
    var hash2 = new Array(1001).fill(0)
    // -----创建两个哈希表，26位存储0-----
    
    var sameArray = []

    // -----将nums1,nums2存入哈希表中---- 
    for(let i = 0;i < nums1.length;i ++){
        hash1[nums1[i]] ++
    }
    for(let i = 0;i < nums2.length;i ++){
        hash2[nums2[i]] ++
    }
    // -----将nums1,nums2存入哈希表中---- 
    // ------判断1001位中是否存在同时不为0的，有就是数组交集之一------
    for(let i = 0;i < 1001;i ++){
        if(hash1[i] !== 0 && hash2[i] !== 0){
            sameArray.push(i)
        }
    }
    return sameArray
};
var nums1 = [4,9,5] 
var nums2 = [9,4,9,8,4]

console.log(intersection(nums1,nums2))


// 日期：2022.12.4日第3题
// 熟练程度：会做-一次通过
// 解题思路：
//  1.创建两个哈希表，1001位存储0
//  2.将nums1,nums2存入哈希表中
//  3.判断1001位中是否存在同时不为0的，有就是数组交集之一,push进数组











