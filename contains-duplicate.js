/**
 * Problem: https://leetcode.com/problems/contains-duplicate/
 * 
 * Map solution
 * Time: O(n)
 * Space: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let map = {};
  for(num of nums) {
    if(map[num]) {
      return true
    } else {
      map[num] = 1
    }
  }
  return false
};

// Quick sort solution
/**
 * Time: O(nlogn)
 * Space: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  quickSort(0, nums.length -1, nums);
  for(let i=0; i < nums.length-1; i++) {
      if(nums[i] === nums[i+1]) return true;
  }
  return false;
};

const quickSort = (left, right, arr) => {
  if(left > right) return
  let pivot = arr[parseInt((left+right)/2)];
  let [i,j] = [left, right];
  while (i <= j) {
      while(arr[i] < pivot) i++;
      while(arr[j] > pivot) j--;
      if(i <= j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
          j--;
      }
  }
  quickSort(left, j, arr);
  quickSort(i, right, arr);
}