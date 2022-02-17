/**
 * Problem: https://leetcode.com/problems/third-maximum-number/
 * Time: O(n)
 * Space: O(1)
 * @param {number[]} nums
 * @return {number}
 */

 var thirdMax = function(nums) {
  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;
  let third = Number.MIN_SAFE_INTEGER;
  
  for(const num of nums) {
      if(num == first || num == second || num == third) continue;
      if(num > first) {
          [third, second, first] = [second, first, num];
      } else if(num > second) {
          [third, second] = [second, num]
      } else if(num > third) {
          third = num
      }
  }
  return third == Number.MIN_SAFE_INTEGER ? first : third
}