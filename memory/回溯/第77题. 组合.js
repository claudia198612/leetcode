// function conbine(n,k) { 
//     let res = []
//     let path = []
//     backtracking(1)
//     function backtracking(startIndex){
        
//         if(path.length === k){
//             res.push([...path]);
//             return
//         }

//         for(let i = startIndex;i <= n ;i ++){
//             path.push(i);
//             backtracking(i+1)
//             path.pop()
//         }
//     }
//     return res
//  }
// console.log(conbine(4,2))

// console.log(null == undefined)
// console.log(null === undefined)
// console.log(typeof null)
// console.log(typeof undefined)
let a = null
console.log(null instanceof Object)