class Node {
    //构造函数
    constructor(val, left, right, parent) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

class BST {
    //构造函数
    constructor() {
            this.root = null;
        }
        //添加节点
        //分三种情况
        //1、根节点为空
        //2、只有根节点
        //3、二叉树的节点数大于2
    Add(val) {
        let node = new Node(val, null, null, null);
        //情况一：
        if (this.root === null) {
            this.root = node;
            return this.root;
        }
        //使移动指针指向根节点
        let point = this.root;
        //循环直到移动指针的左节点和右节点都为null;
        //情况二：
        while (point.left == null || point.right == null) {

            if (val > point.val && point.right == null) {

                point.right = node;
                node.parent = point;
                return;

                //如果val 比当前节点的值小，就放左边
            } else {
                if (val <= point.val && point.left == null) {

                    point.left = node;
                    node.parent = point;
                    return;
                }
            }
        }
        //情况三：
        //只要当前节点的左孩子或者是右孩子不是null就一直进行循环，直到满足条件return
        while (point.left != null || point.right != null) {
            //如果val 比当前节点的值大，就放右边
            while (val > point.val && point.right != null) {
                //如果目标值比当前值大，且当前节点的右指针不为空，当前节点始终往右节点移动
                point = point.right;
            }
            while (val <= point.val && point.left != null) {
                //如果目标值比当前值小，且当前节点的左孩子不为空，当前节点始终往左节点移动
                point = point.left;
            }

            if (val > point.val && point.right == null) {
                point.right = node;
                node.parent = point;
                return;

                //如果val 比当前节点的值小，就放左边
            } else {
                if (val <= point.val && point.left == null) {

                    point.left = node;
                    node.parent = point;

                    return;
                }
            }
        }
    };
    //--------------------------------------//
    //查节点
    //使用递归的方法来实现


    startsearch(point, val) {
        //递归出口
        if (point == null) {
            //搜查一遍没找到
            return null;
        }
        if (point.val == val) {
            //找到了就返回当前与val相等的节点
            return point;
        }
        //递归
        //可以理解为分身做事
        //右子树递归
        if (point.val < val) {
            return this.startsearch(point.right, val);
        }
        //左子树递归
        if (point.val >= val) {
            return this.startsearch(point.left, val);
        }

    }


    Search(val) {
        //需要自己调用一下自己的内部函数，因为this.root只能内部函数调用
        let answer = this.startsearch(this.root, val);
        // console.log(answer);
        return answer;

    }

    //--------查已经写完了，开始写删除---------//
    //删除值为val的节点
    delete(val) {
        //分三种情况
        //一、无左无右
        //二、有左无右 || 有右无左
        //三、有左有右 -- 分解为 寻找左子树最右节点 + 二、有左无右 || 寻找右子树最左节点 + 二、有右无左
        //-------------------------//
        //先找到这个要被删除的节点
        let point = this.Search(val);
        // 然后找到这个节点的父节点--已经加上了parent指针

        if (!point) {
            //如果这个节点根本不存在，就不需要删除，直接返回根节点
            return this.root;
        } else {
            //如果这个节点存在，才开始删除过程
            //情况一：无左无右
            if (point.left == null && point.right == null) {
                //如果当前节点比父节点大，则删除其父节点的右子树
                if (point.val > point.parent.val) {
                    point.parent.right = null;

                } else {
                    //如果当前节点比父节点小，则删除父节点的左子树
                    if (point.val <= point.parent.val) {
                        point.parent.left = null;
                    }
                }

            }
            //情况二、有左无右 || 有右无左--就让它的右孩子或左孩子来替代它的位置就好了
            if ((point.left == null && point.right != null) || (point.right == null && point.left != null)) {
                let child = point.left ? point.left : point.right;

                //如果当前节点比父节点大，则删除其父节点的右子树
                if (point.val > point.parent.val) {
                    child.parent = point.parent;
                    point.parent.right = child;
                    point = null;
                } else {
                    //如果当前节点比父节点小，则删除父节点的左子树
                    if (point.val <= point.parent.val) {
                        child.parent = point.parent;
                        point.parent.left = child;
                        point = null;
                    }
                }
            }
            return this.root;



        }


    }


}

let bst = new BST();
bst.Add(6);
bst.Add(8);
bst.Add(3);
bst.Add(5);
bst.Add(7);
bst.delete(3);

// console.log(bst.Search(8));
console.dir(bst, {
    depth: 100
});