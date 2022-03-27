/**
 * Problem: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
  let stack = [];
  for(let char of s) {
      if(stack[stack.length-1] === char) {
          stack.pop(); 
      } else {
          stack.push(char)
      }
  }
  return stack.join('')
};