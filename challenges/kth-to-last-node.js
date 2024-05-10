/**
 * Write a function that takes two parameters (an integer, and the head of a
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 * 
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head){
  if (!head || typeof k !== "number") return;

  let length = 0;
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }

  let i = length - k;
  curr = head;

  if (i < 0) return;

  while (i-- > 0) {
    curr = curr.next;
  }

  return curr ? curr.value : undefined;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(1, a)); // -> returns 'D' (the value on the second to last node)
//Do not delete! 
module.exports = {Node, kthToLastNode};