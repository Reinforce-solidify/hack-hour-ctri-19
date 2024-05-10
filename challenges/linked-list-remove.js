/*
Write a function to delete the first instance of a node in a singly linked list.
The function should return the deleted node, or undefined if the value was not found.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 
And given a value, 'b', the linked list after calling your function should look like:

('a' -> 'c' -> 'b' -> 'd')

And the evaluated result would be the removed node with the value of 'b'.

How might you remove a linked list value without adding extra properties to the constructor functions?

*/

// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

// Create the linked list instance
let myList = new LinkedList();

// Create nodes
const node1 = new Node('a');
const node2 = new Node('b');
const node3 = new Node('c');
const node4 = new Node('b');
const node5 = new Node('d');

// Link nodes
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Set the head of the linked list
myList.head = node1;

const linkedListRemove = (ll, val) => {
  if (!ll || !ll.head) return;

  let current = ll.head;
  let prev = null;

  // if the removed item is the head
  if (current.val === val) {
    ll.head = current.next;
    return ll;
  }

  while (current !== null && current.val !== val) {
    prev = current;
    current = current.next;
  }

  // If the node was found and is not the last node
  if (current !== null) {
    prev.next = current.next;  // Remove the current node by updating the link
  }

  return ll;
};

console.log(linkedListRemove(myList, 'e'))

/*
Extension: 
* Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1). 
* Write a function to delete the all instances of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'd' -> 'c' -> 'd')
 
 And given a value, 'd', the evaluated result of calling your function should be:

 ('a' -> 'b' -> 'c')

*/

const linkedListRemoveMultiple = (ll, val) => {

}

module.exports = { LinkedList, Node, linkedListRemove, linkedListRemoveMultiple };
