// 这一版本最好记忆
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
  
class LinkedList {
  constructor() {
    this.head = null;
  }
  
  add(data) {
    const new_node = new Node(data);
    if (this.head === null) {
      this.head = new_node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new_node;
    }
  }
  remove(data) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
// 把old_data换成new_data
  update(old_data, new_data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === old_data) {
        current.data = new_data;
        return;
      }
      current = current.next;
    }
  }

  reverse() {
      let prev = null;
      let current = this.head;
      while (current !== null) {
        const next_node = current.next;
        current.next = prev;
        prev = current;
        current = next_node;
      }
      this.head = prev;
    }

  toString() {
    const values = [];
    let current = this.head;
    while (current !== null) {
      values.push(String(current.data));
      current = current.next;
    }
    return values.join('->');
  }
}


const linked_list = new LinkedList();
linked_list.add(1);
linked_list.add(2);
linked_list.add(3);
console.log(linked_list.toString()); // 输出 1->2->3
linked_list.remove(2);
console.log(linked_list.toString()); // 输出 1->3
console.log(linked_list.search(3)); // 输出 true
linked_list.update(3, 4);
console.log(linked_list.toString()); // 输出 1->4
