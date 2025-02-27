// Ques 1: Implement Linear Search in JavaScript
// Write a function to search "target" in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(n) runtime complexity.
// Input: nums = [4,5,6,7,0,1,2], target = 0 Output: 4
// Input: nums = [4,5,6,7,0,1,2], target = 3 Output: -1

function linearSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i;
        }
    }

    return -1;
}

// Time complexity - O(n)
// Space complexity - O(1)

// console.log(linearSearch([4,5,6,7,0,1,2], 0))
// console.log(linearSearch([4,5,6,7,0,1,2], 3))

function globalLinearSearch(nums, target) {
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            result.push(i);
        }
    }

    if (result.length) return result;

    return -1
}

// Time complexity - O(n)
// Space complexity - O(n)

// console.log(globalLinearSearch([4,5,0,7,0,1,2], 0))
// console.log(globalLinearSearch([4,5,6,7,0,1,2], 3))

function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let middle = Math.floor((start + end) / 2);

        if(nums[middle] === target) {
            return middle;
        } else if(nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
}

// Time complexity - O(log n)
// Space complexity - O(1)

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9))