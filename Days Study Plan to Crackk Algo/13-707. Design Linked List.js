class Node{
    constructor(val,next){
        this.val = val
        this.next = next
    }
}

/**
 * Initialize your data structure here.
 * 单链表 储存头尾节点 和 节点数量
 */
var MyLinkedList = function() {
    this.size = 0
    this.head = null
    this.tail = null
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function(index){
     
    if(index < 0 || index > this.size){
        return null
    }
    // 也就是说h是新Node上的一个指针
    // 创建虚拟头节点Node
    let h = new Node(0,this.head)
    while(index -- > 0){
        h = h.next
    }
    return h

 }
 MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size){
        return -1
    }
    return this.getNode(index).val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val,this.head)
    this.head = newNode
    this.size ++
    if(!this.tail) {
        this.tail = newNode;
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val,null);
    this.size ++
    // 如果this.tail存在，说明链表里面已经有节点了
    if(this.tail){
        // 尾指针指向的节点的next节点是newNode
        this.tail.next = newNode
        // 尾指针移动到newNode节点
        this.tail = newNode
        return
    }
    // 如果到了这里，说明链表里面没有节点
    this.head = newNode
    this.tail = newNode
    
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    // 如果index>this.size
    if(index > this.size){
        return
    }

    if(index === 0){
        this.addAtHead(val)
        return
    }

    if(index === this.size){
        this.addAtTail(val)
        return 
    }
    let cur = this.getNode(index - 1)
    cur.next = new Node(val,cur.next)
    this.size ++
    
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this._size) return;

    // 如果删除的是头结点
    if(index === 0){
        this.head = this.head.next
        // 如果与此同时尾结点等于头结点
        // index是从0开始的，this.size是个数，第0节点的index是1,所以要-1
        if(this.size - 1 === index){
            this.tail = this.head
        }
        this.size ++
        return
    }

    // 如果删除的是中间节点或者尾结点
// 拿到的是要删除节点的前一个元素
    let pre = this.getNode(index-1)

    pre.next = pre.next.next
    this.size -- 
    // 如果删除的是尾结点
    if(index === this.size - 1){
         this._tail = pre;

    }
    
};
