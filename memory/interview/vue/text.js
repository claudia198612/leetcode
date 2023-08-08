// 如果两个await在一个async里面，那么第二个await需要等待第一个await执行完才执行，整个async函数会停止执行，而主线程去执行async函数之外的任务
// 比如：案例1中，b会等a执行完

// 如果两个await分别在两个async里面，那么a,b同时执行
// 比如：案例2中：同时输出

// 如果两个定时器在主线程，没有用await，也不在async里面，那么也是同时执行开启两个定时器，不互相等待
// 比如：案例3中：同时输出

// 总结：await关键字对导致async函数的局部阻塞（暂时停止执行），但是不会阻塞主线程。
// 当执行到await关键字的时候，整个async函数里面await后面的语句都会等待前面的await的执行完毕。
// 但是在async之外的主线程任务，继续执行，并不阻塞

// 案例1：

async function text() { 
    let b  = 0;
    let a = 0;
    console.log('开始')
    a = await new Promise(resolve => {
        setTimeout(() =>{
            console.log("a:" + a)
            resolve(3);
        }, 3000);
    });

    b = await new Promise(resolve => {
        setTimeout(() =>{
            console.log("b:" + b)
            resolve(3);
        }, 3000);
    });

    let c = Promise.all([a,b])
    console.dir("c:" + c,{depth:null});
    // console.log("a:" + a);
}

text();

console.log(5)



// // --------------------------------------------------------------------
// 案例2：
// async function a() {
//     await new Promise(resolve => {
//         setTimeout(() =>{
//             console.log("a finished")
//             resolve(3);
//         }, 1000);
//     });
// }

// async function b() {
//     await new Promise(resolve => {
//         setTimeout(() =>{
//             console.log("b finished")
//             resolve(3);
//         }, 1000);
//     });
// }

// Promise.all([a(), b()]).then(() => {
//     console.log("all finished");
// });


// // -------------------------------------------------------------
// 案例3：
// setTimeout(() =>{
//     console.log("a finished")
// }, 1000);

// setTimeout(() =>{
//     console.log("b finished")
// }, 1000);

// ------------------------------------------------------------------
// function sleep(seconds) {
//     const start = new Date().getTime();
//     while (new Date().getTime() < start + seconds * 1000);
// }


// function sleep1(seconds) {
//     const start = new Date().getTime();
//     while (new Date().getTime() < start + seconds * 1000);
// }
// sleep(3);
// sleep1(1);
// console.log('Start');
 
// console.log('End');
// ------------------------------------------------------------------


// async function text() { 
//     await new Promise(resolve => {
//         function sleep(seconds) {
//             const start = new Date().getTime();
//             while (new Date().getTime() < start + seconds * 1000);
//         }
//     })

//     function sleep1(seconds) {
//         const start = new Date().getTime();
//         while (new Date().getTime() < start + seconds * 1000);
//     }

//     sleep(3);
//     sleep1(1);
//     console.log('Start');
//     console.log('End');
//  }




// async function sleep(seconds) {
//     await new Promise(resolve => setTimeout(resolve, seconds * 1000));
//     console.log(3)
// }


// async function sleep1(seconds) {
//     await new Promise(resolve => setTimeout(resolve, seconds * 1000));
//     console.log(1)
// }

// sleep(3);
// sleep1(1);
// console.log('Start');
 
// console.log('End');
  




// let a = 0
// setTimeout(()=>{
//     a = 100;
//     console.log(a);
// },1000)

