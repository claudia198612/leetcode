//快速排序运用的分治的思想（+递归）

//快排入口
function start(arr) {
    var low = 0;
    var high = arr.length - 1;
    console.log(recursion(arr, low, high));

}


//寻找轴，与递归
function recursion(arr, low, high) {

    if (low < high) { //递归退出条件
        //寻找轴
        let pivot = quick_sort(arr, low, high);

        //递归
        recursion(arr, low, pivot - 1);
        recursion(arr, pivot + 1, high); //???这里也要+1

    }
    return arr;

}

//返回轴+排序
function quick_sort(arr, low, high) {

    let pivot = arr[low];

    while (low < high) {
        while (low < high && arr[high] >= pivot) {
            high--;
        }

        arr[low] = arr[high];

        while (low < high && arr[low] <= pivot) {
            low++;
        }

        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;

}

start([6, 3, 5, 4, -1, -8, -4, 2]);