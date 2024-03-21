function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

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
tree.insert(10);
console.log(tree);

/*

Given the root of a binary search tree, determine the difference of the maximum
and minimum value.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

returns 8, becuase 9 - 1 = 8

*/

const bstMinMax = root => {
  if (!root) return 0;

  let min = root, max = root;

  while(min.left || max.right){
    if (min.left) min = min.left;
    if (max.right) max = max.right;
  }
  
  return max.value - min.value;
};
console.log(bstMinMax(tree));
/*

Extension: (not necessarily related in technique to above problem, but
nevertheless still a BST problem)

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
given nodes "p" and "q" in the BST. Return the LCA node itself.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

The LCA of node 1 and node 3 is node 2.
The LCA of node 8 and node 9 is node 9.
The LCA of node 2 and node 8 is node 4.

*/

const lowestCommonAncestor = (root, p, q) => {
  
};

module.exports = {BinarySearchTree, bstMinMax, lowestCommonAncestor};
