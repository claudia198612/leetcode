

function sum(...nums) { 
    nums.reduce((pre,cur) => {
        console.log('pre: '+ pre)
        console.log('cur: '+ cur)
        console.log('sum: '+ (cur + pre))
        return cur + pre
    })
 }


 console.log( sum(1,2,3,4,5))