class EventEmitter{
    constructor(){
        this._events = {};
    }
    on(eventName,callback){
        if(this._events[eventName]){
            if(this.eventName !== 'newListener'){
                this.emit('newListener',eventName);
            }
        }
        const callbacks = this._events[eventName] || [];
        callbacks.push(callback);
        this._events[eventName] = callbacks;
    }
    
    emit(eventName,...args){
        const callbacks = this._events[eventName] || [];
        callbacks.forEach(cb => cb(...args));
    }
    off(eventName,callback){
        const callbacks = this._events[eventName] || [];
        const newcallbaks = callbacks.filter(fn => fn != callback && fn.initialCallback != callback);
        this._events[eventName] = newcallbaks;
    }
    once(eventName,callback){
        const one = (...args) => {
            callback(...args);

            this.off(eventName,one);
        }
        one.initialCallback = callback;
        this.on(eventName,one);
    }
}


const events = new EventEmitter()

events.on('newListener',function(callback){
    console.log('newListener', callback)
})

events.on('hello',function(){
    console.log('hello')
})

let cb = function(){
    console.log('cb');
}
events.on("hello", cb)

events.off("hello", cb)

function once(){
    console.log("once");
}
events.once("hello", once)

events.off("hello", once)
events.emit("hello")
events.emit("hello")
