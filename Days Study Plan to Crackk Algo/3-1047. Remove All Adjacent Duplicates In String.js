var removeDuplicates = function(s) {
    var stack = []
    var n = stack.length
    for(let i = 0;i < s.length; i ++){
        n = stack.length
        //如果为空直接push进去
        if(!n){
            stack.push(s[i])
            continue
        }
        //不是空的

        // 1.没重复
        var topelem = stack[n - 1]
        if(topelem !== s[i]){
            stack.push(s[i])
            continue
        }


        // 2.重复
        
        if(topelem == s[i]){
            stack.pop()
            continue
        }
    }
    return stack.join('')
};

s = "abbaca"
console.log(removeDuplicates(s))

// 笔记：
// 让数组转换成字符串的3中方法：
// 1..join()
//  var a= ["00", "01", "02", "03", "04"]
//  var b=  a.join()       --- ()什么都没，最后是用逗号分隔
//  console.log(b)
//  console.log( typeof b)
//  //打印结果  00,01,02,03,04 --- 

//  // join('')
//  var a= ["00", "01", "02", "03", "04"]
//  var b=  a.join('')      ---  ()有个单引号，最后连成一个字符串，没有任何分隔
//  console.log(b)
//  console.log( typeof b)
//  //打印结果  0001020304

// 2.toString
// var a= ["00", "01", "02", "03", "04"]
// var c = a.toString();  //把数组转换为字符串---中间用,分隔
// console.log(c)
// console.log(typeof c);  //返回字符串string，说明是字符串类型
// //打印结果  00,01,02,03,04