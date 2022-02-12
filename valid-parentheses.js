/**
 * Problem: https://leetcode.com/problems/valid-parentheses/
 * Time: O(n)
 * Space: O(n)
 */ 

/**
 * @param {string} s
 * @return {boolean}
 */

 var isValid = function(s) {
  let stack = [];
  for(let char of s) {
      switch(char) {
        case '{': {
              stack.push('}')
              break;
          }
        case '(': {
              stack.push(')')
              break;
          }
        case '[': {
              stack.push(']')
              break;
          }
        default: {
              if(stack.pop() != char) return false
              break;
          }
      }
  }
  return stack.length === 0;
}