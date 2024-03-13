function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree and a callback function, apply the
callback to the values of the BST in breadth-first order.

Example:

If the tree is

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

then apply the callback on the numbers in the order:
4, 2, 7, 1, 3, 9, 8.

Hint:

Maintain a queue (array) consisting of the nodes we need to operate on.
For each node in the queue, push the left and right children (if applicable) to
the end of the queue. Keep consuming the queue (using the shift method) until
there are no more nodes in the queue.

Utilizing recursion is not necessary, nor recommended.

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

const bfs = (root, callback) => {
  const queue = [root];

  while(queue.length) {
    const node = queue.shift();
    callback(node.value);

    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
};


const test = (value) => console.log(value);
bfs(four, test);
 
/*

Extension:

Given a 2D grid of 0s, 1s, and a single 2, with the start position the top-left
corner, determine the minimum distance need to travel to the 2.

0s represent traversable land.
1s represent "water" that we cannot traverse.
2 represents our final goal.

The top-left corner will always be a 0. We will try to reach the 2 by
traversing through land. We are only allowed to traverse up/left/down/right,
with no diagonal movement allowed. If the 2 cannot be reached, return -1.

Examples:

Input:
[
  [0, 0, 1, 1],
  [2, 0, 1, 0],
  [1, 0, 0, 0]
]
Output: 1 (starting at the top-left corner, move down)

Input:
[
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0]
]
Output: 6 (starting at the top-left corner, either move
down-right-down-right-right-up, or right-down-down-right-right-up)

Input:
[
  [0, 0, 0, 1, 1, 0, 2, 0]
]
Output: -1 (the 2 is not reachable by land)

Hint:

Apply the general principles of breadth-first search. Maintain a queue of
positions with their distances. When consuming each position, check to see which
neighbors are traversable and haven't already been visited.

*/

const minimumDistance = grid => {
  let rows = grid.length, cols = grid[0].length;
  let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // down, right, up, left
  let queue = [[0, 0, 0]]; // row, column, distance
  let visited = new Set(['0,0']);
  console.log(visited);

  while (queue.length) {
    let [row, col, distance] = queue.shift();
    
    if (grid[row][col] === 2) {
      return distance;
    }

    for (let [dr, dc] of directions) {
      let r = row + dr;
      let c = col + dc;
      let key = `${r},${c}`;
      if (r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] !== 1 && !visited.has(key)) {
          queue.push([r, c, distance + 1]);
          visited.add(key);
      }
    }
    console.log(visited)
  }
  return -1;
};

const case1 = [
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0]
];
const case2 =[[0, 0, 0, 1, 1, 0, 2, 0]];

console.log(minimumDistance(case1)); // 6

module.exports = {BinarySearchTree, bfs, minimumDistance};
