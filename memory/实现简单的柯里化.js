// // -----玩具柯里化--只能说明知道柯里化是什么意思----
// function sum (a) {
//     return (b) => {
//        return (c) => {
//            return a + b + c
//        }
//     }
//    }
//    sum(1)(2)(3)



// // -----真实的柯里化--理解了柯里化的源码-------

 function curry(fn) {
    return function curried(...args) {
        // 在 JavaScript 中，函数对象有一个名为 length 的属性，表示函数期望接收的参数数量。
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function (...args2) {
            // 这里确实涉及到了递归。
          return curried.apply(this, args.concat(args2));
        };
      }
    };
  }
  

  // 定义一个简单的加法函数
function add(a, b, c) {
    return a + b + c;
  }
  
  // 使用 curry 函数对 add 函数进行柯里化
  const curriedAdd = curry(add);
  
  // 现在可以像这样使用 curriedAdd 函数
  console.log(curriedAdd(1)(2)(3)); // 输出：6
  console.log(curriedAdd(1, 2)(3)); // 输出：6
  console.log(curriedAdd(1, 2, 3)); // 输出：6
  

 