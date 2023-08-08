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
// ll.append(2)
// ll.append(3)
// ll.append(4)
// ll.append(5)


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    //很巧妙的一道题，用快慢指针做
    //一个fast指针，一个slow指针
    //要删除倒数第n个节点
    //先让fast往前走n+1下
    //从此之后，slow与fast一起往前走,知道fast为null
    //这是某种数学关系，当fast走到null时，slow刚好为要删除的节点的前一个，原因就是数学关系
    // -------------添加头结点------------
    var head1 = new ListNode(0, head);
    var fast = head1;
    var slow = head1;
    // -------------添加头结点------------
    for(let i = 0 ;i < n + 1; i ++){
        fast = fast.next;
    }
    while(fast){
        fast=fast.next;
        slow=slow.next;
    }
    slow.next=slow.next.next;
    return head1.next;
 };

removeNthFromEnd(ll.header,1)


// 2022.11.28日第1题
// 熟练程度：会动手，错在细节fast.next始终要考虑到会不会成功，添加头结点的方法完全没想到

// 易错点：
// 1、head理解成指针，只在第一个节点上面，而不要想象成一个头节点在第一个节点前面
// 2、最后一个元素的null是有效的，再next也就是null的next就无效了,也就是当fast到达最后一个元素的null时，连代码出现next都会报错
// 3、特别注意只有一个元素且删除倒数一个的情况,还有多个元素要删除第一个元素的情况
// 4、为了3问题方便，可以用添加头节点的方法。本题使用添加头结点，一劳永逸
// 5、添加头结点就可以大胆往前走了，fast先往前走n+1步,此后fast与slow一直一起走知道fast为null
// 6、最后返回也要注意，因为head1是虚构的，所以要返回head1的next才是真实的





