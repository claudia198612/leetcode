var letterCombinations = function(digits) {
    var l = digits.length
    var map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    
    // 剪枝
    if(!l) {
        return []
    }

    if(l === 1) {
        return map[digits].split("")
    }

    // 正式处理
    var result = []
    var path = []

    backtracking(digits, l, 0)
    return [...result]

    // 这里直接function,不能用var = function
    function backtracking(n, l, start) {
        // 递归终止条件
        if(path.length === l) {
            result.push(path.join(""))
            return
        }

        // 递归继续
        for(let v of map[n[start]]) {
            path.push(v)
            backtracking(n,l,start + 1)
            path.pop()
        }
    }
};


console.log(letterCombinations("23"))

 // 这里直接function,不能用var = function

// ...运算符，就是用来去除[] , {}用的

// path.join("") --- 将数组用""连接起来，引号内容，引号里啥都没，就不用间隔，紧密连接

// 一、作用对象
// 1、split()方法是对字符串的操作；splice()是对数组的操作。slice()即可用于字符串也可用以数组。

// 二、参数
// 1、split(separator,howmany) 参数有两个 sepatator为必选项，表示分割字符串的符号如“，”，“：”，”|“等。howmany为可选项，表示分割后返回的结果长度。

// 2、splice(index,howmany,item1,item2,item…)参数至少两个，index为必选项，表示操作数组的起始位置，负数表示从倒数开始。howmany为必选项，表示从起始位置开始要替换或删除几个元素。item为可选项目，表示要替换的新元素，有则替换没有则表示删除。

// 3、slice(start,end) 参数有两个，start为必填字段，end为选填字段，返回一个新的数组，包含从 start 到 end 的元素。

// 三、返回值
// 1、split() 返回一个字符串数组。

// 2、splice() 返回被删除的元素组成的数组 即 如果使用arr = arr.splice()的方法将会返回一个被截取的部分，而arr.splice()后再调用arr将会返回一个截取后的新数组。

// 3、slice() 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。

// 四、注意事项
// 1、splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改，也就说使用了 demo.slice()方法之后demo还是demo，而使用了demo.splice()之后demo将发生改变。

// 2、split()和slice()方法一样，不会对原数组进行改变，想要获取改变后的数组需要进行赋值操作。即、demo = demo.slice(start,end);
