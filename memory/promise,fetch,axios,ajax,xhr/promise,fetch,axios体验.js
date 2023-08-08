function foo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("123")
            // reject("error")
        },100)
    })
}

foo()
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log("finally")
    })