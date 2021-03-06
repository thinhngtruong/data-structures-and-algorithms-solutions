/**
 * Problem: https://leetcode.com/problems/count-items-matching-a-rule/
 * Time: O(n)
 * Space: O(1)
 *
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 **/
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;

  for (let item of items) {
    switch (ruleKey) {
      case "type": {
        if (item[0] === ruleValue) count++;
        break;
      }
      case "color": {
        if (item[1] === ruleValue) count++;
        break;
      }
      case "name": {
        if (item[2] === ruleValue) count++;
        break;
      }
    }
  }

  return count;
};
