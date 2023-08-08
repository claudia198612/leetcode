/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    var fast = head
    var slow = head

    while(true){
        if(!fast || !fast.next || !fast.next.next){
            // 如果fast 或者 fast+1 或者 fast+2有一个为null，就返回null，就没环
            // 注意！这里一定要把next与next.next都写上，因为一旦next或者next.next为null，就报错，下面要用到这俩
            return null
        }
        fast = fast.next.next
        slow = slow.next
        if(fast === slow){
            break
        }
        
    }
    // 至此两者相遇，fast归零，slow继续，两者一步，再次相遇就是入口
    fast = head
    while(fast !== slow){
        fast = fast.next
        slow = slow.next
    }
    return fast
};
// 2022.11.28日第3题
// 熟练程度：不会动手，忘记2步追1步原理，最后快归零，慢继续，俩走一，再相遇，即入口
// 最后快归零，慢继续，俩走一，再相遇，即入口原理不知道是什么

// 解题思路：
// 1、fast与slow同时从head出发，fast走俩步，slow走一步，在环内一定会相遇，不相遇就没环
// 2、相遇之后，slow继续走到入口的距离 === fast从head走到入口的距离，都是一步一步走的
// 3、由于fast , fast.next ,fast.next.next都用上了，所以都要保证不是null
