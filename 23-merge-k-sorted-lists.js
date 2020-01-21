// https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] === null) {
      lists.splice(i, 1);
      i--;
    }
  }

  console.log(lists);
  const ans = new ListNode(null);
  let tmp = ans;

  while (lists.length) {
    lists.sort((a, b) => a.val - b.val);
    tmp.next = new ListNode(lists[0].val);
    tmp = tmp.next;
    lists[0] = lists[0].next;
    if (lists[0] === null) lists.shift();
  }
  return ans.next;
};
