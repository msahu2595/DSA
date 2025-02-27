// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer

// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.
// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.
// Input: nums = [-2,-1,-1,1,2,3] Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Input: nums = [-3,-2,-1,0,0,1,2] Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
// Input: nums = [5,20,66,1314] Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

function maximumCount(nums) {
    const upper = upperBound(nums);
    const lower = lowerBound(nums);
    return Math.max(upper, lower);
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
console.log(maximumCount([5, 20, 66, 1314]));

// [-2,-1,-1,1,2,3]
// low = 2, high = 2
// mid = 3 => nums[3] = 1
function upperBound(nums) {
    let low = 0,
        high = nums.length - 1;
    while (low < high) {
        let mid = Math.ceil((low + high) / 2);
        if (nums[mid] < 0) low = mid;
        else high = mid - 1;
    }
    return nums[0] >= 0 ? 0 : low + 1;
}

function lowerBound(nums) {
    let low = 0,
        high = nums.length - 1;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] > 0) high = mid;
        else low = mid + 1;
    }
    return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
}
