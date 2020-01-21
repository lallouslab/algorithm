// https://leetcode.com/problems/swap-nodes-in-pairs

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
var swapPairs = function(head) {
  let tmp = head;
  while (true) {
    if (tmp === null || tmp.next === null) break;
    [tmp.val, tmp.next.val] = [tmp.next.val, tmp.val];
    tmp = tmp.next.next;
  }
  return head;
};
