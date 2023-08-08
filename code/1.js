var relativeSortArray = function(arr1, arr2) {
    let res = [];
    
    for(let i = 0;i < arr2.length; i ++){
        for(let j = 0;j < arr1.length; j++){
            if(arr2[i] === arr1[j]){
                res.push(arr1[j]);
                arr1.splice(j,1);
                i --;
            }
        }
    }
    arr1.sort((a, b) => a - b)

    const res1 = res.concat(arr1)
    console.log("res1:" + res1)
    // console.log("res:" + res)
    console.log("arr1:" + arr1)
    return res1



};

arr1 = [2,3,1,3,2,4,6,7,9,2,19]
arr2 = [2,1,4,3,9,6]
relativeSortArray(arr1,arr2)