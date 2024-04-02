function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, determine the sum of all the values.
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

const bstSum = root => {
  if (!root) return 0;
  
  return root.value + bstSum(root.left) + bstSum(root.right);
};

console.log(bstSum(tree));
/*

Extension:
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

const bstReverse = root => {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  bstReverse(root.left);
  bstReverse(root.right);

  return root;
};
// use while loop version in bst-reverse.js
console.log(bstReverse(tree));
module.exports = {BinarySearchTree, bstSum, bstReverse};
