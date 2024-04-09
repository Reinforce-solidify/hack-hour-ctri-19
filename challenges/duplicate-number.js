/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const duplicateNumber = array => {
    const cache = {};
    for(let i=0; i<array.length; i++){
        if (array[i] in cache) return array[i];
        cache[array[i]]= true;
    }
};
console.log(duplicateNumber([1,5,4,3,6,2,4,7]));

/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = array => {
    let k = Math.min(...array);
    let i = 0;

    // perform a cyclic sort on the array
    while (i < array.length) {
        let correctIndex = array[i] - k;
        console.log(correctIndex)
        if (array[i] !== array[correctIndex]) {
            // Swap the numbers
            [array[i], array[correctIndex]] = [array[correctIndex], array[i]];
        } else {
            i++;
        }
        console.log(array)
    }
    // Find the first duplicate number
    for (let j = 0; j < array.length; j++) {
        if (array[j] !== j + k) {
            return array[j];
        }
    }

    return -1; // No duplicate found
};

// Test case
console.log(duplicateNumberAdvanced([3, 6, 4, 7, 6, 8, 5])); // Output: 6


module.exports = { duplicateNumber, duplicateNumberAdvanced };
