/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

// to adapt requirement that time complexity better than O(n), we can apply binary search algorithm with O(log n)
const findInOrderedSet = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left+right) / 2);

    if (array[mid] === target) {
      return true;
    }
    
    else if (target > array[mid]) {
      left += 1;
    }
    else right -= 1;
  }

  return false;
};

const nums = [-3, 0, 8, 13, 37];
console.log(findInOrderedSet(nums, 0)); // -> true
console.log(findInOrderedSet(nums, 2)); // -> false

/*
Extension:

Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

*/
// 
const findIn2dMatrix = (matrix, target) => {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    // console.log(matrix[row][col]);
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--; // move left
    else row++; //move down
  }

  return false;
};

const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
console.log(findIn2dMatrix(matrix, 13)); //-> true
console.log(findIn2dMatrix(matrix, 42)); //-> false
module.exports = { findInOrderedSet, findIn2dMatrix };
