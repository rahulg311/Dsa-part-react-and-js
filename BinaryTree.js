// Tree Node definition
function tree(val) {
  (this.val = val), (this.left = null);
  this.right = null;
}

function NodeCheck(a, b) {
  if (a == null && b == null) return true;
  if (a == null || b == null) return false;
  if (a.val != b.val) return false;
  return NodeCheck(a.left, b.left) && NodeCheck(a.right, b.right);
}

let node = new tree(2);
node.left = new tree(3);
node.right = new tree(4);
// node.left.left =new tree(5)
// console.log(node)
let node2 = new tree(2);
node2.left = new tree(3);
node2.right = new tree(2);
// node.left.left =new tree(5)
// console.log(node)

console.log(NodeCheck(node, node2));
