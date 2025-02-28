// Ques 3: Implement Insertion Sort in JavaScript
// write a function to sort the given array nums in ascending order.
// Input: nums = [29,10,14,37,14,33,8,11] >>> Output: [8,10,11,14,14,29,33,37]

function insertionSort(arr: number[]): number[] {
    let n = arr.length;

    // console.log(arr);
    for (let i = 1; i < n; i++) {
        // console.log(`----${i}----`);
        const key = arr[i];

        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            // console.log(j);
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr
}

console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11]));

// Best Case Time Complexity = O(n)
// Worst Case Time Complexity = O(n^2)
// Average Case Time Complexity = O(n^2)
// Time Space Complexity = O(1)
