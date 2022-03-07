/**
 * Problem: https://leetcode.com/problems/remove-element/
 * Space: O(1)
 * Time: O(n)
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let left = 0;
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] != val) {
          nums[left] = nums[i];
          left++;
      }
  }
  return left
};