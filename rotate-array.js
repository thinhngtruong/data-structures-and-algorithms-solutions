/**
 * Problem: https://leetcode.com/problems/rotate-array/
 * Time: O(n)
 * Space: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 const reverse = (arr, start, end) => {
  while(start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
  }
}

var rotate = function(nums, k) {
  if (nums === null || nums.length === 0) {
      return;
  }
  k = k % nums.length;
  if (k === 0) {
      return;
  }
  nums.reverse();
  reverse(nums, 0, k-1);
  reverse(nums, k, nums.length - 1);
};

