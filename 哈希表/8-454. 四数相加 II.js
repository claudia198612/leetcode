/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    var twoSum = new Map()
    var count = 0
    // -----把nums1,nums2中i,j之和作为key存储在map中，i,j之和出现的次数存储在value中-----
    for(let i of nums1){
        for(let j of nums2){
            // -------关键代码--逻辑运算-------
            // --1.Map中的key为i + j
            // --2.Map中的value为 Map中 i+j出现的次数 + 1
            twoSum.set( i + j , (twoSum.get( i + j ) || 0 ) + 1)
            // -------关键代码--逻辑运算-------
        }
    }
    // -----把nums1,nums2中i,j之和作为key存储在map中，i,j之和出现的次数存储在value中-----

    //--- 统计nums3,nums4中 0 - (i+j) 作为key对应的value -- 意为与nums1,nums2抵消为0 ，数量累加，解题---
    for(let i of nums3){
        for(let j of nums4){
            count += twoSum.get(0 - (i + j)) || 0
        }
    }
    //--- 统计nums3,nums4中 0 - (i+j) 作为key对应的value -- 意为与nums1,nums2抵消为0 ，数量累加，解题---

    return count
};

var nums1 = [1,2]
var nums2 = [-2,-1]
var nums3 = [-1,2]
var nums4 = [0,2]

console.log(fourSumCount(nums1,nums2,nums3,nums4))

// 日期：2022.12.5日第1题
// 熟练程度：暴力解法会，map解法完全不知道
// 注意：这题与三数之和四数之和不一样，甚至比三数之和四数之和简单


// 解题思路：
//  1.把nums1,nums2中i,j之和作为key存储在map中
//  2.把nums1,nums2中i,j之和出现的次数存储在value中
//  3.统计nums3,nums4中 0 - (i+j) 作为key对应的value -- 意为与nums1,nums2抵消为0 ，数量累加，解题

// 数据结构：
//  1.Map : var twoSum = new Map()
//      value = Map.get(key) --- 获取Map中 key 的 value
//      Map.set(key,value) --- 在Map中 放置一个key 与 value
//      { key : value }

// 循环语法：
//  1. for(let i of nums1) 遍历nums1中的元素，每个当前元素都是i

// 逻辑运算：
//  1. || ： 让undefined与null都为0，其他数都为其他数
// console.log(undefined || 0) // 0
// console.log(5 || 0)         // 5
// console.log(null || 0)      // 0
// console.log(-10 || 0)       // -10