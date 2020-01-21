// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const absHead = head;
  let nodes = [];
  let cnt = 0;
  while (head) {
    cnt++;
    nodes.push(head);
    head = head.next;
  }
  if (cnt - n - 1 >= 0) {
    nodes[cnt - n - 1].next = nodes[cnt - n].next;
    return absHead;
  } else {
    return nodes[0].next;
  }
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let nullHead = new ListNode(null);
  nullHead.next = head;
  let p1 = nullHead, p2 = nullHead;
  while(n--) p2 = p2.next;
  while(p2.next) {
      p1 = p1.next;
      p2 = p2.next;
  }
  p1.next = p1.next.next;
  return nullHead.next;
};