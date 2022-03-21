/**
 * Problem: https://leetcode.com/problems/binary-tree-level-order-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isMirror = (node1, node2) => {
  if(node1 == null && node2 == null) {
      return true;
  }    
  if(node1 != null 
     && node2 != null 
     && node1.val == node2.val
     && isMirror(node1.left, node2.right) 
     && isMirror(node1.right, node2.left)) {
      return true
  }
  return false
}

var isSymmetric = function(root) {
  return isMirror(root, root);
};

// BFS
var isSymmetric = function(root) {
  let queue = [root, root];
  while (queue.length > 0) {
      let node1 = queue.shift(), node2 = queue.shift();
      if (node1 == null && node2 == null) continue;
      if (node1 == null || node2 == null) return false;
      if (node1.val !== node2.val) return false;
      queue.push(node1.left, node2.right);
      queue.push(node1.right, node2.left);
  }
  
  return true;
  // Time Complexity: O(n), we possibly visit all nodes
  // Space Complexity: O(n/2) = O(n), the bottom level could have at most n/2 nodes
}