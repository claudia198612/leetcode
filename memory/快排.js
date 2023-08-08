function partition(low,high,arr){
    // 轴--储存low的值
    let pivot = arr[low]
    // low < high -- 不能等于

    while(low < high){
        while(low < high && arr[high] >= pivot){
            high --
        }
        // 到这里，就一定不满足low < high && arr[high] >= pivot了
        arr[low] = arr[high]
        while(low < high && arr[low] <= pivot){
            low ++
        }
        // 到这里，就一定不满足low < high && arr[high] >= pivot了
        arr[high] = arr[low]

    }
    arr[low] = pivot
    return arr[low]
}

function quicksort(low,high,arr) { 
    // low始终是小于high的,不能等于
    if(low < high){
        let pivot = partition(low, high, arr)
        quicksort(pivot + 1,high,arr)
        quicksort(low,pivot - 1,arr)
    }
    return arr
 }
console.log(quicksort(0,4,[3,2,4,1,5]))
 