// function reduce(arr, callback, initialValue) {

//     let accumulator = initialValue === undefined ? arr[0] : initialValue;

//     // let accumulator;

//     // if (initialValue === undefined) {
//     //     accumulator = arr[0];
//     // } else {
//     //     accumulator = initialValue;
//     // }    
//     for (let i = initialValue === undefined ? 1 : 0; i < arr.length; i++) {
//       accumulator = callback(accumulator, arr[i]);
//     }
// //     let i;
// //     if (initialValue === undefined) {
// //         i = 1;
// //     } else {
// //         i = 0;
// //     }

// //     while (i < arr.length) {
// //         accumulator = callback(accumulator, arr[i]);
// //         i++;
// //     }
//     return accumulator;
//   }

function Myreduce(arr,Callback,initialValue){
    let acumulate = initialValue === undefined ? arr[0] : initialValue;

    for(let i = initialValue === undefined ? 1 : 0; i < arr.length ;i ++){
        acumulate = Callback(acumulate, arr[i])
    }
    return acumulate
}




  
  // 示例用法
  const numbers = [1, 2, 3, 4, 5];
  const sum = Myreduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0);
  
  console.log(sum); // 输出: 15
  