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
const four = new BinarySearchTree(4);
four.insert(2);
four.insert(7);
four.insert(5);
four.insert(1);
four.insert(3);
four.insert(2);
four.insert(0);
four.insert(9);
four.insert(8);
console.log(four);

const bstHeight = tree => {
  if (tree === null) return ;

  return 1 + Math.max(bstHeight(tree.left, bstHeight(tree.right)));
};

console.log(bstHeight(four));
console.time("bstHeight");
bstHeight(four);
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
  
};

module.exports = {BinarySearchTree, bstHeight, superbalanced};
