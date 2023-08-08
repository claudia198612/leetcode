var arr4 = [
    { name: 'zhangsan', age:18 },
    { name: 'lisi', age:2 },
    { name: 'wangwu', age:50 },
]



function compare(age) { 
    return function(a,b) {
        var val1 = a[age]
        var val2 = b[age]
        return val1 - val2
    }
    
 }
    
var arr5 = arr4.sort(compare('age'));
console.log( arr5 )




function compare() { 
    return function(a,b) {
        var val1 = a['age']
        var val2 = b['age']
        return val1 - val2
    }
    
 }
    
var arr5 = arr4.sort(compare());
console.log( arr5 )