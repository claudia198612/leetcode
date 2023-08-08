function popSort(arr) { 
    for(let j = 0;j < arr.length;j ++){
        for(let i = 0 ;i < arr.length - j; i ++){

            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [5,2,4,3,1];
console.log(popSort(arr))

