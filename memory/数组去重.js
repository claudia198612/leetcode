// //-----------set法1---------------
// const array = [1, 2, 2, 3, 3, 4, 5, 5];
// const uniqueArray = [...new Set(array)];
// console.log(uniqueArray); // [1, 2, 3, 4, 5]


//-----------set法2---------------
// function unique (arr) {
//     return Array.from(new Set(arr))
//   }
//   var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
//   console.log(unique(arr))
//    //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]


// //-----------双重循环+Splice法3---------------
// function unique(arr){            
//     for(var i=0; i<arr.length; i++){
//         for(var j=i+1; j<arr.length; j++){
//             if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
//                 arr.splice(j,1);
//                 j--;
//             }
//         }
//     }
// return arr;
// }
// var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// console.log(unique(arr))
// //[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了



// //-----------新数组中indexOf原数组元素为-1去重法4---------------

// function unique(arr) {
//     if (!Array.isArray(arr)) {
//         console.log('type error!')
//         return
//     }
//     var array = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (array .indexOf(arr[i]) === -1) {
//             array .push(arr[i])
//         }
//     }
//     return array;
// }
// var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// console.log(unique(arr))
//    // [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重


// //-----------includes包含元素为true不包含为false法5---------------
// function unique(arr) {
//     if (!Array.isArray(arr)) {
//         console.log('type error!')
//         return
//     }
//     var array =[];
//     for(var i = 0; i < arr.length; i++) {
//             if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
//                     array.push(arr[i]);
//               }
//     }
//     return array
// }
// var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
//     console.log(unique(arr))
//     //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     //{}没有去重



// //-----------sort之后现元素与现-1元素比较法6---------------
// function unique(arr) {
//     if (!Array.isArray(arr)) {
//         console.log('type error!')
//         return;
//     }
//     arr = arr.sort()
//     var arrry= [arr[0]];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] !== arr[i-1]) {
//             arrry.push(arr[i]);
//         }
//     }
//     return arrry;
// }
//      var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
//         console.log(unique(arr))
// // [0, 1, 15, "NaN", NaN, NaN, {…}, {…}, "a", false, null, true, "true", undefined]      //NaN、{}没有去重



