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

    //append方法，从后面添加值为Element的元素
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
        //appendAt方法，从index位置添加值为Element的元素
    appendAt(index, Element) {
            //边界判断
            if (index < 0 || index > this.size) {
                throw new Error("index out of range");
            } else {
                let current = new Node(Element);
                //index===0的情况--header会改变 
                if (index === 0) {
                    current.next = this.header;
                    this.header = current;
                } else {
                    //index!== 0-- header不改变
                    let pre = this.getNode(index - 1);
                    current.next = pre.next;
                    pre.next = current;
                }
            }
            this.size++;

        }
        //remove方法，从链表中删除索引为index的元素
    remove(index) {
            //index边界讨论
            if (index < 0 || index >= this.size) {
                throw new Error("index out of range");
            } else {
                //讨论情况 -- 头部元素 -- 非头部
                if (index === 0) {
                    this.header = this.header.next;
                } else {
                    let pre = this.getNode(index - 1);
                    pre.next = pre.next.next;
                }

            }
            this.size--;

        }
        //从链表中查找值为Element元素的索引
    indexOf(Element) {
        let current = this.header;
        for (let i = 0; i < this.size; i++) {
            if (current.Element === Element) {
                return i;
            }
            current = current.next;
        }
        return -1;

    }
// 查找到某节点，而不是下标
    getNode(index) {
        let current = this.header;
        //这里确实是<index，而不是<=，比如index是3，那么只需要移动0,1,2就可以直接到最后节点，再移动一次就null了
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

}

let LinkNode = new LinkList();

LinkNode.append(1);
LinkNode.append(2);
LinkNode.appendAt(2, 3);
LinkNode.appendAt(3, 4);
LinkNode.appendAt(4, 5);

// LinkNode.remove(3);
console.log(LinkNode.indexOf(5))


console.dir(LinkNode, {
    depth: 100
});