/**
 * Problem: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * Space: O(n)
 * Time: O(nlogn)
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var helper = (arr, left, right) => {
  if(left > right) return null;
  const mid = Math.floor((right + left) / 2);
  const root = new TreeNode(arr[mid]);
  root.left = helper(arr, left, mid - 1);
  root.right = helper(arr, mid + 1, right);
  return root;
}

var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;
  
  return helper(nums, 0, nums.length - 1);
};