const {LinkedList, Node, linkedListRemove, linkedListRemoveMultiple} = require('../challenges/linked-list-remove');

describe('linkedListRemove test', () => {
  const ll = new LinkedList();
  beforeEach(() => {
    const nodeList = new Node('a');
    nodeList.next = new Node('d');
    nodeList.next.next = new Node('b');
    nodeList.next.next.next = new Node('c');
    nodeList.next.next.next.next = new Node('b');
    ll.head = nodeList;
  });

  it('Should delete the first instance of the node', () => {
    const deletedNode = linkedListRemove(ll, 'a');
    expect(deletedNode.val).toEqual('a');
    expect(ll.head.val).toEqual('d');
    expect(ll.head.next.val).toEqual('b');
  });

  it('Should delete node with value that appears later in the linked list', () => {
    linkedListRemove(ll, 'c');
    expect(ll.head.val).toBe('a');
    expect(ll.head.next.val).toBe('d');
    expect(ll.head.next.next.val).toBe('b');
    expect(ll.head.next.next.next.val).toBe('b');
  });

  it('Bonus: Should be solved in constant space', () => {
    const secondNode = ll.head.next;
    linkedListRemove(ll, 'a');
    expect(secondNode).toBe(ll.head);
  });
});

describe("linkedListRemoveMultiple", () => {
  const llMultiple = new LinkedList();
  beforeEach(() => {
    const nodeList = new Node("a");
    nodeList.next = new Node("a");
    nodeList.next.next = new Node("d");
    nodeList.next.next.next = new Node("c");
    nodeList.next.next.next.next = new Node("d");
    nodeList.next.next.next.next.next = new Node("b");
    llMultiple.head = nodeList;
  });

  it("Bonus: Should delete all repeated instances at the head of the list", () => {
    const newLL = linkedListRemoveMultiple(llMultiple, "a");
    const firstRemoveRef = newLL.head.val;
    expect(firstRemoveRef).toBe("d");
    expect(newLL.head.next.val).toBe("c");
    expect(newLL.head.next.next.val).toBe("d");
    expect(newLL.head.next.next.next.val).toBe("b");
    expect(newLL.head.next.next.next.next).toBeNull();
  });

  it("Bonus: Should be solved in constant space", () => {
    const newLL = linkedListRemoveMultiple(llMultiple, "a");
    // This test was broken and checking if a LinkedList is equal to a Node
    // To check that the operation was in place need to do referential equality
    // while checking that the value of all nodes is the same.
    expect(newLL).toEqual(llMultiple);
    expect(newLL.head).toEqual(llMultiple.head);
    expect(newLL.head.next).toEqual(llMultiple.head.next);
    expect(newLL.head.next.next).toEqual(llMultiple.head.next.next);
    expect(newLL.head.next.next.next).toEqual(llMultiple.head.next.next.next);

    // check value of each node
    expect(newLL.head.val).toEqual(llMultiple.head.val);
    expect(newLL.head.next.val).toEqual(llMultiple.head.next.val);
    expect(newLL.head.next.next.val).toEqual(llMultiple.head.next.next.val);
    expect(newLL.head.next.next.next.val).toEqual(
      llMultiple.head.next.next.next.val
    );
  });
});
