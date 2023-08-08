//当传入的参数是数组类型时，在b函数中改变arr的值，竟然也会影响a函数中arr的值！！


function b(arr) {
    arr = [4, 5, 6];

}

function a(arr) {
    //arr刚传入进来就是4,5,6;

    console.log(arr); //输出值为：4,5,6

    b(arr); //经过b函数改变arr[0]=1、arr[1]=2、arr[2]=3的值

    //检测a中的arr是否发生改变 -- 结论：在a函数中的arr的值也发生改变！！
    console.log(arr); //输出值为：1,2,3.在a函数中的arr的值也发生改变！！

}

a([4, 5, 6]); //程序开头--调用 a 函数，传入数组[4, 5, 6]










// //当传入参数是int类型的时候，无论在b函数中怎么改变q,w,e的值，a中的q,w,e都不变
// function b(q, w, e) {
//     //在b中改变q,w,e的值
//     q = 4;
//     w = 5;
//     e = 6;
// }

// function a(q, w, e) {
//     console.log("1: " + q, w, e); //未经过 b 函数改变q,w,e值 ：1,2,3

//     b(q, w, e); //经过b函数改变b函数中q,w,e的值

//     console.log("2: " + q, w, e); //经过 b 函数改变q,w,e值: 1,2,3（无变化，和原来一样）
// }
// a(1, 2, 3); //程序开头--调用 a 函数，q = 1, w = 2, e = 3;