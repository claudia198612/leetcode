// 栈（stack）又名堆栈，它是一种运算受限的线性表。
// 限定仅在表尾进行插入和删除操作的线性表，是一种先进后出（FILO）的数据结构，限定只能在一端进行插入和删除操作
// 允许操作的一端称为栈顶，不允许操作的称为栈底
// 向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素
// 从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素
// 栈的功能：
//  1.push 新增元素
//  2.pop 删除栈顶元素
//  3.peek 返回栈顶的元素
//  4.clear 清空栈
//  5.size 栈的大小，也就是元素个数
//  6.isEmpty 栈是否为空


class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return null;
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.items.length === 0) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  }

  const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size()); // 输出 3
console.log(stack.peek()); // 输出 3
console.log(stack.pop()); // 输出 3
console.log(stack.size()); // 输出 2
console.log(stack.isEmpty()); // 输出 false
stack.clear();
console.log(stack.isEmpty()); // 输出 true








































