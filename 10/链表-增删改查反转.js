//创建Node节点
class Node {
    //Node节点有Element,有next指针
    //用constructor构造函数
    //用this关键字创建
    constructor(Element) {
        this.Element = Element;
        this.next = this.next;
    }

};


//创建LinkList
class LinkList {
    //LinkList含有size大小，有header指针头指针
    constructor() {
        this.header = null;
        this.size = 0;
    }

    //append方法，可以在链表末尾最后面随意添加元素
    append(Element) {
            var node = new Node(Element);
            //分两种情况，空链表情况，非空链表情况
            if (this.size == 0) {
                this.header = node;

            } else {
                //非空情况，需要拿到最后一个节点
                var index = this.size - 1;
                var current = this.GetNode(index);
                current.next = node;

            }
            //最后完成了不要忘记size++
            this.size++;

        }
        //appendAt方法，可以在链表任意地方添加元素
    appendAt(Element, index) {
        let node = new Node(Element);
        //讨论情况，index不能小于0，不能大于this.size-1
        if (index < 0 || index > this.size) {
            throw new Error("index out of range");
        } else {
            //讨论情况，如果Index==0插入到第一个
            if (index == 0) {
                node.next = this.header;
                this.header = node;

            }
            if (index > 0 && index <= this.size - 1) {
                //如果index>0 && index < this.size - 1;从中间插入
                //首先拿到要插入的位置的节点
                //我要插到索引为1的节点位置，则要取到index-1的位置的节点为pre,index位置为current
                var pre = this.GetNode(index - 1);
                node.next = pre.next;
                pre.next = node;
            }
            if (index == this.size) {
                //如果index == this.size从最后插入
                this.append(Element);
                this.size--; //append里面有size++，appendAt这里又有一次size++，加多了
            }

        }
        //最后不要忘记size++;
        this.size++;
    }

    //移除索引为index的元素
    remove(index) {
            //讨论，如果移除的是头元素，直接移动header就可以，如果移除的是中间，如果移除的是末尾
            //index不能小于0，不能大于size-1;
            if (index < 0 || index > this.size - 1) {
                throw new Error("index out of range");
            } else {
                if (index == 0) {
                    //移除的是头元素
                    this.header = this.header.next;
                }
                if (index > 0 && index < this.size - 1) {
                    var pre = this.GetNode(index - 1); //拿到index索引的前面一个元素
                    pre.next = pre.next.next;
                }
                if (index == this.size - 1) {
                    //移除最后一个元素
                    var pre = this.GetNode(index - 1); //拿到index索引的前面一个元素,也就是倒数第二个元素
                    pre.next = null;
                }
            }
            //最后不要忘记size --;
            this.size--;
        }
        //查找元素值为Element的元素的索引
    IndexOf(Element) {
        var current = this.header;
        for (let i = 0; i < this.size; i++) {
            if (current.Element == Element) {
                return i;
            } else {
                current = current.next;
            }
        }
        return "Not Found"
    }


    GetNode(index) {
        //index是想要拿到的节点的下标
        var current = this.header;
        //从头结点移动index-1次就可以取到下标为index的节点
        for (let i = 0; i < index; i++) {
            current = current.next;
        };
        return current;
    }




};

//测试：
var List = new LinkList();

List.append(1);
List.append(2);
List.append(3);
List.append(4);
List.appendAt(5, 4); //在末尾添加元素
List.appendAt(6, 2); //在中间添加元素，理应该1,2,6,3,4,5
List.appendAt(9, 0); //在开头添加元素，理应该9,1,2,6,3,4，5
List.remove(0); //移除开头元素,理应是1,2,6,3,4,5
List.remove(3); //移除中间元素,理应是1,2,6,4,5
List.remove(4); //移除中间元素,理应是1,2,6,4
console.log(List.IndexOf(6)); //理应是2
console.log(List.IndexOf(0)); //理应是 "Not Found"

console.dir(List, {
    depth: 100
});