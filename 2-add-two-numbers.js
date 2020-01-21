// https://leetcode.com/problems/add-two-numbers/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
  const ans = new ListNode(0);
  let current = ans;
  let val = 0;
  while(l1 !== null || l2 !== null) {
    if (l1 !== null) {
      val += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      val += l2.val;
      l2 = l2.next;
    }
    current.next = new ListNode(val % 10);
    current = current.next;
    val = parseInt(val / 10);
  }
  if (val > 0) {
    current.next = new ListNode(val);
  }
  return ans.next;
}