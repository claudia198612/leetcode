// 粗暴理解 ：await其实就是模拟的promise.then的逻辑，只是写法不同。
// // 所以await后面只要promise被resolve或者被reject就可以了，不要重复promise.then，除非promise.then里面又返回一个新promise

// // promise被resolve或者被reject了之后它还是一个Promise，如果不使用.then拿值的话就用await等值，还可以用Promise.all等值
// // Promise { 1275 }意味着这是一个已经完成的Promise，其结果值为1275。
// // 尽管Promise已经有了结果，但它仍然是一个Promise对象。
// // 这是因为Promise是用来处理异步操作的，即使在这种情况下它已经有了结果。
// // 这样的设计可以让我们用统一的方式处理异步操作，不论它们是已经完成还是正在进行。

// async function addNumbers(a, b) {
//   // 这里返回的是一个resolve状态的有值的Promise
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(a + b), 0);
//   });
// }

// async function calculateSum() {
//   const numbers = Array.from({ length: 1000 }, (_, i) => i + 1);
//   const chunkSize = 50; // 可调整的分块大小，可以根据需求进行调整
//   const chunks = [];

//   for (let i = 0; i < numbers.length; i += chunkSize) {
//     chunks.push(numbers.slice(i, i + chunkSize));
//   }


// // 这里从chunk参数是chunks中的单个数组，比如chunks有20个数组，chunk就是一个数组
//   async function processChunk(chunk) {
//     let sum = 0;
//     for (const number of chunk) {
//       // 像reduce函数，总的与现在的累加
//       // 与reduce不同的是，reduce处理的是数组，而这里处理的是数组里面的数和总和
//       sum = await addNumbers(sum, number);

//     }
//     // console.log("sum: ", sum);
//     return sum;
//   }
// // 使用await关键字，相当于把await关键字下面的代码都放进了promise.then里面了
// // 如果又使用了await，又使用了.then，那么.then里面如果没有return，await会是undefined
// // Promise.all()是一个Promise对象方法，它接收一个Promise对象数组作为参数，并返回一个新的Promise,对象该对象表示传入的所有Promise对象都已经解决（或拒绝）。
//   // processChunk(chunk)没有加await，返回的是promise，如果加了await，则每次都要等待异步的结果，将会破坏我们多个异步同时执行的初衷
//   // map()方法会自动创建一个数组，并将每个函数调用的结果也就是promise添加到该数组中。

//   // 拿到一个数组，里面每一个元素都是promise，每一个chunk组的和
//   const promises =  chunks.map((chunk) =>  processChunk(chunk));
//   const results = await Promise.all(promises);
//   console.log("promises: ", promises);
//   // console.log("results: ", results);

//   let totalSum = 0;
//   for (const sum of results) {
//     totalSum = await addNumbers(totalSum, sum);
//   }

//   // console.log("Total sum: ", totalSum);
// }

// calculateSum();
