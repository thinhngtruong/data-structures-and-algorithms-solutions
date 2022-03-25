/**
 * Problem: https://leetcode.com/problems/valid-anagram/
 * Space: O(n)
 * Time: O(n)
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length != t.length) return false
  let map = {};
  for(let char of s) {
      map[char] = map[char] + 1 || 1;
  }
  for(let char of t) {
      if(!map[char]) return false;
      if(map[char]) {
          if(map[char] == 1) {
              delete map[char]
          } else {
              map[char]--
          }
      }
  }
  return Object.keys(map).length === 0
};