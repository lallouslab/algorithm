// https://leetcode.com/problems/reverse-nodes-in-k-group

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let left = head, right = head, i = 0, vals = Array(k).fill(0);
  while(right !== null) {
      vals[i++] = right.val;
      right = right.next;
      if (i === k) {
          while(i > 0) {
              left.val = vals[--i];
              left = left.next;
          }
      }
  }
  return head;
};