// Ques 4: Sliding Window Maximum
// Source: https://leetcode.com/problems/sliding-window-maximum/

// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right. You can only see the k numbers
// in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.

// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

// Input: nums = [1], k = 1
// Output: [1]

// Input: nums = [1, -1], k = 1
// Output: [1, -1]

// Input: nums = [9, 11], k = 2
// Output: [11]

// Input: nums = [4, -2], k = 2
// Output: [4]

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

// Solution 1: Brute Force
function maxSlidingWindowNaive(nums: number[], k: number) {
    const result: number[] = [];
    const n: number = nums.length;

    for (let i: number = 0; i <= n - k; i++) {
        let max: number = nums[i];

        for (let j: number = 1; j < k; j++) {
            if (max < nums[i + j]) {
                max = nums[i + j];
            }
        }

        result.push(max);
    }

    return result;
}

// console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3))

// Solution 2: Using Deque
function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const n: number = nums.length;

    const deque: number[] = []; // [0,1,2,3]

    // Run for loop for n-1 
    for (let i = 0; i < n; i++) { // O(n)

        // Pop first element if the index(value) is not in current window
        if (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // Maintain monotonic decreasing stack Ex. [-3, -1, 3]
        while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) { // O(k)
            deque.pop();
        }

        // Push i to deque 
        deque.push(i);

        // Wait for i to be equal to window so we can add max element into result arr
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))

// Time complexity = O(n) + O(k) = O(2n)
// Space complexity = O(n - k) + O(k) = O(n)

// More Leet code questions for sliding window 
// https://leetcode.com/problems/minimum-window-substring/description/
// https://leetcode.com/problems/min-stack/description/
// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/description/