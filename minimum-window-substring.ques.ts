// Given two strings s and t of lengths m and n respectively, return the minimum window substring
// of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC" 
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

const s = "ADOBECODEBANC";
const t = "ABC";

// Solution 1: Brute force
function minimumWindowSubstringNaive(s: string, t: string): string {
    let minlength = Number.MAX_SAFE_INTEGER;
    let startIndex = -1;

    for (let i = 0; i < s.length; i++) {
        let hash = {};
        for (let char of s) {
            hash[char] = 0;
        }
        for (let j = 0; j < t.length; j++) {
            hash[t[j]] = hash[s[j]] + 1;
        }

        let count = 0;

        for (let k = i; k < s.length; k++) {
            if (hash[s[k]] > 0) count += 1;

            hash[s[k]] = hash[s[k]] - 1;

            console.log("i", i, "k", k, { count, startIndex, minlength });

            if (count == t.length) {
                if ((k - i + 1) < minlength) {
                    startIndex = i;
                    minlength = k - i + 1;
                    console.log({ count, startIndex, minlength })
                    break;
                }
            }
        }
    }

    console.log({ startIndex, minlength })

    return s.substring(startIndex, startIndex + minlength);
}

// console.log(minimumWindowSubstringNaive(s, t));

// Time complexity = O(n^2)
// Space complexity = O(n)

// Solution 2: Using 2 Pointer Sliding Window
function minimumWindowSubstring(s: string, t: string): string {
    let minlength = Number.MAX_SAFE_INTEGER;
    let startIndex = -1;

    let l = 0;
    let r = 0;

    let hash = {};
    for (let char of s) {
        hash[char] = 0;
    }
    for (let j = 0; j < t.length; j++) {
        hash[t[j]]++;
    }

    let count = 0;

    while (r < s.length) {
        if (hash[s[r]] > 0) count++;

        hash[s[r]]--;

        console.log("r", r, { count, startIndex, minlength });

        while (count == t.length) {
            if ((r - l + 1) < minlength) {
                startIndex = l;
                minlength = r - l + 1;
                console.log({ count, startIndex, minlength })
            }

            hash[s[l]]++;

            if (hash[s[l]] > 0) {
                count--;
            }

            l++;
        }

        r++;
    }

    console.log({ startIndex, minlength })

    return startIndex == -1 ? "" : s.substring(startIndex, startIndex + minlength);
}

console.log(minimumWindowSubstring(s, t));

// Time complexity = O(2n) + O(k) = O(2n)
// Space complexity = O(n) = O(n)