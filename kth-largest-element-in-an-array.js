/**
 * Problem: https://leetcode.com/problems/kth-largest-element-in-an-array/
 * Space: O(1)
 * Time: O(nlogn)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 **/
var findKthLargest = function(arr, k) {
    k = arr.length-k
    quickSelect(0, arr.length-1, k, arr);
    return arr[k]
};

var quickSelect = (left, right, k, arr) => {
    if(left > k || k > right) return;
    let pivot = arr[parseInt((left+right)/2)];
    let i = left;
    let j = right;
    while(i<=j) {
        while(arr[i] < pivot) {
            i++;
        }
        while(arr[j] > pivot) {
            j--;
        }
        if(i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    quickSelect(left, j, k, arr);
    quickSelect(i, right, k, arr);
}