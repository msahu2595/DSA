// Ques 1: Implement Bubble Sort in JavaScript
// write a function to sort the given array nums in ascending order.
// Input: nums = [29,10,14,37,14] ----->>>>> Output: [10,14,14,29,37]

const bubbleSort = (arr: number[]): number[] => {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    return arr;
}

console.log(bubbleSort([29, 10, 14, 37, 14]));

// Best Time Complexity = O(n)
// Worst Time Complexity = O(n^2)
// Average Time Complexity = O((n/2)^n) = O(n^2)

// Space Complexity = 0(1)