/**
 * Problem: https://leetcode.com/problems/valid-palindrome/
 * Time: O(n)
 * Space: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if(s.length == 0 || s.length == 1) return true;
  for(let i =0; i < s.length/2; i++) {
      if(s[i] != s[s.length-i-1]) return false;
  }
  return true
};