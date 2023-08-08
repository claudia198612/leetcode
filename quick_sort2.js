var start = function(arr) {

    let low = 0;
    let high = arr.length - 1;


    console.log(recursion(arr, low, high));

}

var recursion = function(arr, low, high) {


    if (low < high) {
        let mid = Pos(arr, low, high);
        recursion(arr, low, mid - 1);
        recursion(arr, mid + 1, high);
    }

    return arr;

}

var Pos = function(arr, low, high) {
    let pos = arr[low];

    while (low < high) {

        while (low < high && arr[high] >= pos) {
            high--;
        }
        arr[low] = arr[high];

        while (low < high && arr[low] < pos) {
            low++;
        }
        arr[high] = arr[low];
    }

    arr[low] = pos;

    return low;


}



var arr = [4, 7, 3, 6, 8, 9, 2, 1];

start(arr);