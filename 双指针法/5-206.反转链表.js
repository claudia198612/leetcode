class Node {
    //单看一个节点
    //它有值Element
    //它有next
    //constructor构造函数
    constructor(Element) {
        this.Element = Element;
        this.next = null;
    }
}



class LinkList {
    //单看链表LinkNode
    //它有header
    //它有size
    constructor() {
        this.header = null; //首先创建的时候header为null，因为是个空链表，还没往里面创建元素
        this.size = 0; //首先创建的时候，因为整个链表为空链表，长度也为0
    }
    append(Element) {
        let node = new Node(Element);
        //分两种情况--1、空链表情况 --2、非空链表情况
        //空链表情况
        if (this.size === 0) {
            this.header = node;
        } else {
            //非空链表的情况
            //寻找到最后一个节点
            let current = this.getNode(this.size - 1);
            current.next = node;

        }
        //添加完记得增加size;
        this.size ++;
    }
    getNode(index) {
        let current = this.header;
        //这里确实是<index，而不是<=，比如index是3，那么只需要移动0,1,2就可以直接到最后节点，再移动一次就null了
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
}

const ll = new LinkList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(5)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    // 判断特殊情况
    if(head == null || head.next == null){
        return head
    }
    var fast = head.next
    var current = head
    var slow = null
    // -------核心代码---------
    while(current != null){
        current.next = slow
        slow = current
        current = fast
        // ----易错地区！！-----
        if(fast){
            fast = fast.next
        }
        // ----易错地区！！-----
    }
    // -------核心代码---------

    head = slow
    return head
};

// 2022.11.27日第1题
// 熟练程度：会写，能通过，细节出错，比如：如果fast存在，才能fast=fast.next，不然报错
// 思路：
//  1、需要三个指针，一个slow,一个current，一个fast
//  2、slow初始为null,current初始为header，fast初始为current.next
//  3、首先，current.next = slow; 其次, slow = current ;然后current = fast;最后fast = fast.next(fast存在才行)










