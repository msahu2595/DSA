// https://leetcode.com/problems/kth-missing-positive-number

// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Return the kth positive integer that is missing from this array.
// Input: arr = [2,3,4,7,11], k = 5 Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
// Input: arr = [1,2,3,4], k = 2 Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

function findKthPositive(arr: number[], k: number): number {
    let missingNumCount = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= k + missingNumCount) {
            missingNumCount++;
        }
    }

    return k + missingNumCount;
}

console.log(findKthPositive([2,3,4,7,11], 5));
console.log(findKthPositive([1,2,3,4], 2));
console.log(findKthPositive([2,3,4,7,11], 1));