var start = function(arr) {
    //----------分------------//
    let len = arr.length;
    //讨论极端情况
    if (len < 2) {
        return arr;
    }
    let Mid = Math.floor(len / 2);
    //左边数组
    //slice开区间，[)
    let left = arr.slice(0, Mid);
    let right = arr.slice(Mid);
    return merge_sort(left, right);
}

var merge_sort = function(left, right) {
    //----------治----------//

    let temp = [];
    // push()方法可以在数组的末属添加一个或多个元素
    // shift()方法把数组中的第一个元素删除
    // unshift()方法可以在数组的前端添加一个或多个元素
    // pop()方法把数组中的最后一个元素删除
    //比较left和right数组的第一个元素，永远第一个
    //谁小谁push进临时数组
    while (left.length && right.length) {

        if (left[0] <= right[0]) {
            temp.push(left.shift());
        } else {
            temp.push(right.shift());
        }
    }
    //处理左右数组有剩余的情况
    while (left.length) {
        temp.push(left.shift());
    }
    while (right.length) {
        temp.push(right.shift());
    }
    return temp;
}

console.log(start([6, 3, 5, 4, -1, -8, -4, 2]));