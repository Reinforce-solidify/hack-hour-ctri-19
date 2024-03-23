function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Find the tallest height of a binary search tree.

Ex. the tallest height of:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.

*/
BinarySearchTree.prototype.insert = function(val) {
  if (val <= this.value) {
    if (this.left) {
      this.left.insert(val);
    } else {
      this.left = new BinarySearchTree(val);
    }
  } else {
    if (this.right) {
      this.right.insert(val);
    } else {
      this.right = new BinarySearchTree(val);
    }
  }
};

// Create the BST and insert nodes
const tree = new BinarySearchTree(4);
tree.insert(2);
tree.insert(7);
tree.insert(5);
tree.insert(1);
tree.insert(3);
tree.insert(9);
tree.insert(8);
// tree.insert(6);
console.log(tree);

const bstHeight = tree => {
  if (!tree) return 0;

  return 1 + Math.max(bstHeight(tree.left, bstHeight(tree.right)));
};

console.log(bstHeight(tree));
console.time("bstHeight");
bstHeight(tree);
console.timeEnd('bstHeight');
/*
  Extension:

  Write a function to see if a binary tree is "superbalanced".
  An empty tree is balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1.
  example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF

  A superbalanced tree is a tree that is balanced at every subtree level as well.

  Ex. 
        4                       4
      /   \                   /   \
     2     7                2       7
    / \     \             /  \     /  \
   1   3     9           1    3   5    9
            /                         /
           8                         8

  The tree on the left is balanced - height of left side is 2, height of right side is 3.
  But, it is not superbalanced since for the 7 subtree, height of left is 0, height of right is 2.
  
  The tree on the right is superbalanced since the difference in height is not more than 1 at any given subtree.
 */

  const superbalanced = tree => {
    // helper func to get height of tree
    function getHeight (node) {
      if (!node) return 0;
      return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    };
  
    if (!tree) return true;
    // get the height of left and right of subtrees
    const lefttHeight = getHeight(tree.left);
    const rightHeight = getHeight(tree.right);
    console.log(`node: ${tree.value}`, lefttHeight, rightHeight)
    // check if the current is balanced
    const isCurrentBalanced = Math.abs(lefttHeight - rightHeight) <= 1;
    // console.log(isCurrentBalanced)
    // Recursively check if left and right subtrees are superbalanced
    return isCurrentBalanced && superbalanced(tree.left) && superbalanced(tree.right);
  };
  
  console.log(superbalanced(tree));

module.exports = {BinarySearchTree, bstHeight, superbalanced};
