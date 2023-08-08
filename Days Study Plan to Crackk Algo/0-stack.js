// ES6
class stack6 {
    constructor(data = []) {
      this.top = data.length
      this.dataStore = data
    }
  
    push(element) {
      this.dataStore.push(element)
      this.top++
    }
    
    pop() {
      this.top--
      return this.dataStore.pop()
    }
    
    peek() {
      return this.top > 0 ? this.dataStore[this.top - 1] : undefined
    }
    
    toString() {
      return this.dataStore.join()
    }
    
    clear() {
      this.top = 0
      this.dataStore = []
    }
    
    length() {
      return this.top
    }
  }

  