function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, reverse the binary search tree in-place
and return the root. Reverse the tree so that for each node, every number on the
left is greater and every number on the right is lesser.

For example, the original tree:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

reverses to:

     4
   /   \
  7     2
 /     / \
9     3   1
 \
  8

Do this in-place, so that we never use the BinarySearchTree constructor to
create any new nodes in memory.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/
BinarySearchTree.prototype.insert = function(val) {
  if (val < this.value) {
    if (this.left) this.left.insert(val)
    else this.left = new BinarySearchTree(val)
  } else if (val > this.value) {
    if (this.right) this.right.insert(val)
    else this.right = new BinarySearchTree(val)
  } else return;
}

const tree = new BinarySearchTree(4);
tree.insert(2);
tree.insert(7);
tree.insert(1);
tree.insert(3);
tree.insert(9);
tree.insert(8);
// console.log(tree);

const bstReverse = root => { 
  if (!root) return null;

  let stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();
    // Swap the left and right children
    [node.left, node.right] = [node.right, node.left];

    // If children exist, push them onto the stack
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return root;
};

console.log(bstReverse(tree));
/*

Extension:

Given an array where elements are sorted in ascending order, convert it to a
height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in
which the depth of the two subtrees of every node never differ by more than 1.

Ex:

Given the sorted array: [0, 3, 4, 6, 8, 9], the output is:

     6 
   /   \
  3     9
 / \   /
0   4 8

Whenever you have two elements in the middle like [1, 4, 7, 8], always
prioritize the rightmost value to place at the top of the tree/subtree,
giving us:

    7
   / \
  4   8
 /
1

(i.e. choose the 7 over the 4 to place at the top of the entire tree, and then
the 4 over the 1 to place at the top of the left subtree. Hint: look up the
Math.ceil function)

*/

const sortedArrayToBST = arr => {
  if (!arr.length) {
    return null;
  }

  // Choose the rightmost middle value for the root
  let mid = Math.ceil((arr.length - 1) / 2);
  let root = new BinarySearchTree(arr[mid]);

  // Recursively create BST from left and right subarrays
  root.left = sortedArrayToBST(arr.slice(0, mid));
  root.right = sortedArrayToBST(arr.slice(mid + 1));

  return root;
};

console.log(sortedArrayToBST([0,3,4,6,8,9]));
module.exports = {BinarySearchTree, bstReverse, sortedArrayToBST};
