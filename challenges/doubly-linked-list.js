/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

const list = new DoublyLinkedList();

// // Create nodes
const node1 = new ListNode(4);
const node2 = new ListNode(9);
const node3 = new ListNode(1);
const node4 = new ListNode(6);

// Connect nodes
node1.next = node2;
node2.prev = node1;

node2.next = node3;
node3.prev = node2;

node3.next = node4;
node4.prev = node3;

// Update head and tail of the list
list.head = node1;
list.tail = node4;

console.log(list);
/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {
  if (!this.head) {
    this.head = new ListNode(4);
    this.tail = this.head;
  } else {
    let curr = this.head;
    while(curr.next) {
      curr = curr.next;
    }
    const newNode = new ListNode(val);
    curr.next = newNode;
    newNode.prev = curr;
    this.tail = newNode;
  }
}

list.add(7);
console.log(list);

DoublyLinkedList.prototype.countLength = function () {
  if (!this.head) return 0;
  let count = 1;
  let curr = this.head;

  while(curr.next) {
    curr = curr.next;
    count++;
  }
  
  return count;
}

console.log(list.countLength());
/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {
  if (!this.head) return 

  let curr = this.head;

  while (curr.next) {
    
    delete curr;
    return;
    }
    curr = curr.next
  }
};

module.exports = { DoublyLinkedList };