/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    // --------------处理极端情况------------
    if (headA === null || headB === null) {
        return null;
    }
    // --------------处理极端情况------------
    let pA = headA, pB = headB;
    while (pA !== pB) {
        // pA与pB两遍走完一定是一起到达null的，null === null 就会触发while的不循环条件
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};

// 2022.11.28日第2题
// 熟练程度：会动手，处理不好细节，至今不知道怎么错的，因为无法调试，只能记住
// 此题要用if-else或三元表达式：pA与pB的操作要么是换头要么是next，不能两个同时在一个循环中进行，否则报错,不知道为什么

// 解题思路：
// 1、把headA与headB都走完，俩指针一定都在null位置,null === null为true就会触发停止循环条件
// 2、A把A走完换到headB，B把B走完换到headA，只要有连接点，就一定会相遇
// 3、处理极端情况headA或者headB会是null

// 有个问题：如果两个链表长度一样，那么pA,pB在还没有交换链表的时候，就会同时到达null，此时不就相等破坏循环了吗？
// 答：如果两个链表一样长且有相交的话，那么pA,pB在同时到达null的时候，会先同时到达链表相交的位置，此时就已经打破循环完成解题了
