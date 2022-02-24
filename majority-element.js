/**
 * Problem: https://leetcode.com/problems/majority-element/
 *
 * Map solution
 * Time: O(n)
 * Space: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1;
        if(map[nums[i]] >= nums.length/2) return nums[i]
    }
};

// Quick sort solution
/**
 * Time: O(nlogn)
 * Space: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    quickSort(0, nums.length-1, nums);
    return nums[parseInt(nums.length/2)]
};

const quickSort = (left, right, arr) => {
    if (left > right) return
    let pivot = arr[parseInt((left + right) / 2)];
    let [i, j] = [left, right];
    while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    quickSort(left, j, arr);
    quickSort(i, right, arr);
}
