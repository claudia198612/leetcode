var intersection = function(nums1, nums2) {
    // 秀操作
    // 1、filter 后面接 箭头函数
    // 2、Set用来去重
    // 3、最后提交得用数组所以，Array.from
    return Array.from(new Set(nums1.filter(i => nums2.includes(i))))
};


var intersection = function(nums1, nums2) {
    // nums1去重
    let n1set = new Set(nums1)
    let resset = new Set()

    for(const i of n1set){
        // 1、数组中用includes() --- Set中用has()
        // 2、数组中用push() --- Set中用add
        nums2.includes(i) && resset.add(i)
    }
    
    return Array.from(resset)

};

let nums1 = [1,2,2,1]
let nums2 = [2,2]

console.log(intersection(nums1,nums2))
