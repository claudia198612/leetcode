Function.prototype.mycall = function(ctx,) {
    ctx = ctx || window;
    let fn = Symbol();
    ctx[fn] = this;
    let result;
    if(arguments[1]){
        result = ctx[fn](...arguments[1])
    }else{
        result = ctx[fn]()
    }
    delete ctx[fn];
    return result;
}

let obj = { name: '张三' }
function foo() { return this.name }

console.log(foo.mycall(obj))