/**
 * Problem: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 * Time: O(nlogn)
 * Space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 **/
 var smallerNumbersThanCurrent = function(nums) {
  let map = {};
  let sortedNums = [...nums].sort((a,b) => a-b);
  
  for(let i = 0; i < sortedNums.length; i++) {
    if(typeof map[sortedNums[i]] === 'undefined') {
      map[sortedNums[i]] = i;
    }
  }
  
  return nums.map(num => map[num])
};