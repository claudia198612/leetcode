// assin:一级内容深拷贝，二级及以上浅拷贝
let obj = {name:"Tom", age:18, job:["web"]}
let objCopy = Object.assign({},obj)//这里一定要两个参数{}，不然就全是深拷贝

// 深拷贝
console.log(obj)
console.log(objCopy)
objCopy.job[0] = "IT"
console.log(obj)
console.log(objCopy)

console.log("--------------------")

// 浅拷贝
console.log(obj)
console.log(objCopy)
objCopy.name = "Mick"
console.log(obj)
console.log(objCopy)