/**
 * Problem: https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @param {TreeNode} root
 * @return {number}
 **/
const maxDepth = (root) => {
  if (!root) return 0;
  const stack = [[root, 1]];
  let res = 0;
  while (stack.length !== 0) {
    const [node, depth] = stack.pop();
    if (node) {
      res = Math.max(res, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }
  return res;
};

const maxDepth = (root) => {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (queue.length !== 0) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      let item = queue.shift()
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }

    depth++;
  }
  return depth;
};

var maxDepth = function (root) {
  if (root === undefined || root === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};