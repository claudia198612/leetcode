class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Initialize your data structure here.
 * 单链表 储存头尾节点 和 节点数量
 */
var MyLinkedList = function() {
    this.size = 0;
    this.tail = null;
    this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
 MyLinkedList.prototype.getNode = function(index){
     
    if(index < 0 || index >= this.size){
        return null
    }
    // 也就是说h是新Node上的一个指针
    // 创建虚拟头节点Node
    let h = new LinkNode(0,this.head)
    while(index -- >= 0){
        h = h.next
    }
    return h

 }
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size) return -1;
    // 获取当前节点
    return this.getNode(index).val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new LinkNode(val, this.head);
    this.head = node;
    this.size++;
    if(!this.tail) {
        this.tail = node;
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node = new LinkNode(val, null);
    this.size++;
    if(this.tail) {
        this.tail.next = node;
        this.tail = node;
        return;
    }
    this.tail = node;
    this.head = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this.size) return;
    if(index <= 0) {
        this.addAtHead(val);
        return;
    }
    if(index === this.size) {
        this.addAtTail(val);
        return;
    }
    // 获取目标节点的上一个的节点
    const node = this.getNode(index - 1);
    node.next = new LinkNode(val, node.next);
    this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) return;
    if(index === 0) {
        this.head = this.head.next;
        // 如果删除的这个节点同时是尾节点，要处理尾节点
        if(index === this.size - 1){
            this.tail = this.head
        }
        this.size--;
        return;
    }
    // 获取目标节点的上一个的节点
    const node = this.getNode(index - 1);    
    node.next = node.next.next;
    // 处理尾节点
    if(index === this.size - 1) {
        this.tail = node;
    }
    this.size--;
};

// MyLinkedList.prototype.out = function() {
//     let cur = this._head;
//     const res = [];
//     while(cur) {
//         res.push(cur.val);
//         cur = cur.next;
//     }
// };
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
