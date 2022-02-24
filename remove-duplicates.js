/**
 * Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Time: O(n)
 * Space: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if(!nums) return 0;
    let j = 0;
    for(let i =1; i < nums.length; i++) {
        if(nums[i] !== nums[j]) {
            nums[++j] = nums[i];
        }
    }
    return j + 1
};