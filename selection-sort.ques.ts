// Ques 2: Implement Selection Sort in JavaScript
// Write a function to sort the given array nums in ascending order.
// Input: nums = [29,10,14,37,14] Output: [10,14,14,29,37]

const selectionSort = (arr: number[]) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort([29, 10, 14, 37, 14]))

// Best Time Complexity = O(n)
// Worst Time Complexity = O(n^2)
// Average Time Complexity = O((n/2)^n) = O(n^2)

// Space Complexity = 0(1)