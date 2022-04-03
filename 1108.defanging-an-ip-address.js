/**
 * Problem: https://leetcode.com/problems/defanging-an-ip-address/
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {string} address
 * @return {string}
 **/
 var defangIPaddr = function(address) {
  return address.split('.').join('[.]');
};