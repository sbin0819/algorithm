class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (value < this.value && this.left) {
      this.left.insert(value);
    } else if (value < this.value) {
      this.left = new BST(value);
    }

    if (value > this.value && this.right) {
      this.right.insert(value);
    } else if (value > this.value) {
      this.right = new BST(value);
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }

    if (value < this.value && this.left) {
      return this.left.contains(value);
    } else if (value > this.value && this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
  // root, left, right
  preOrder(node) {
    if (!node) return 'done';
    console.log(this.value);
    if (this.left) this.left.preOrder(this.left);
    if (this.right) this.right.preOrder(this.right);
  }
  // left, root, right
  inOrder(node) {
    if (!node) return 'done';
    if (this.left) this.left.inOrder(this.left);
    console.log(node.value);
    if (this.right) this.right.inOrder(this.right);
  }

  // left, right, root
  postOrder(node) {
    if (!node) return 'done';
    if (this.left) this.left.postOrder(this.left);
    if (this.right) this.right.postOrder(this.right);
    console.log(node.value);
  }

  bfs(node) {}
}

const bst = new BST(10);
bst.insert(5);
bst.insert(20);
bst.insert(9);
bst.insert(9);
bst.insert(9);
bst.insert(9);
bst.insert(9);
bst.insert(9);
bst.insert(3);
bst.insert(19);
bst.insert(32);
console.log(bst);
console.log(bst.postOrder(bst));
console.log(bst.inOrder(bst));
console.log(bst.preOrder(bst));
