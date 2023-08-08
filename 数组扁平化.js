// function flattenArray(arr) {
//     var flattened = [];
  
//     function flatten(arr) {
//       for (var i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//           // 递归处理嵌套数组
//           flatten(arr[i]);
//         } else {
//           flattened.push(arr[i]);
//         }
//       }
//     }
  
//     flatten(arr);
//     return flattened;
//   }

  

  function flattenArray(arr){
    let flat = []

    function flatten(arr) { 
        for(let i = 0;i < arr.length;i ++){
            if(Array.isArray(arr[i])){
                flatten(arr[i])
            }else{
                flat.push(arr[i])
            }
        }
     }
     flatten(arr)
     
     return flat
  }
  let arr = [1,2,[3,4,[5]]]
  console.log(flattenArray(arr))