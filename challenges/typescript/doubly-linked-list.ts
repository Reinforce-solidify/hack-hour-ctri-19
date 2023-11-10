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

/* 
Type definitions for linked list and individual nodes
*/
interface ListType {
  head: null | NodeType,
  tail: null | NodeType
}

interface NodeType {
  val: number | string,
  next: null | NodeType,
  prev: null | NodeType
}

/* 
Class definitions for linked list and individual nodes
*/
class ListNode implements NodeType {
  val: number | string;
  next: null | NodeType;
  prev: null | NodeType;

  constructor(val: number | string) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList implements ListType {
  head: null | NodeType;
  tail: null | NodeType;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  /*
  This method should add a node to the end of the doubly linked list
  */
  add(val: number | string) {

  }

  /*
  This method should remove the first instance of a node with the inputted value from the doubly linked list
  */
  remove(val: number | string) {

  }
}

module.exports = { DoublyLinkedList };