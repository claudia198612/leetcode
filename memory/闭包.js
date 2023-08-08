var car = (function () { 
    let start = 13
    let total = 0

    return {
        money : function(num){
            if(num <= 3){
                total = start
            }else{
                total = start + (num - 3)*5
            }
            return total
        },

        yd : function(flag){
            return flag ? total + 10 : total 

        }
    }
})()

console.log(car.money(10))
console.log(car.yd(true))



