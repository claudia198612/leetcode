var isHappy = function(n) {
    // map是k-v数据结构
    let m = new Map()
    // 运用了闭包
    const getsum = n => {
        // sum=0必须定义在闭包里面，不然下次取值还是上次残留的
        let sum = 0
        while(n){
            sum += (n % 10) ** 2
            n = Math.floor(n / 10)
        }
        return sum
    }

    while(!m.has(n) && n !== 1){
        // map,set用has,数组用includes
       
        // map用set
        m.set(n,1)
        n = getsum(n)
    }
    return n === 1
};
n = 19
console.log(isHappy(n))




