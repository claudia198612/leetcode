var swapPairs = function (head) {
    let ret = new ListNode(0, head), temp = ret;
    while (temp.next && temp.next.next) {
      let cur = temp.next.next, pre = temp.next;
      pre.next = cur.next;
      cur.next = pre;
      temp.next = cur;
      temp = pre;
    }
    return ret.next;
  };


// 日期：2022.12.7日第1题
// 熟练程度：思路完全不清晰，不会动手，看答案
