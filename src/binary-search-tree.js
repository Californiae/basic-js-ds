const { NotImplementedError } = require('../extensions/index.js');
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }


  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      let current = this.rootNode;
      while (true) {
        if (data < current.data) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  has(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) {
        return true;
      }
      current = data < current.data ? current.left : current.right;
    }
    return false;
  }

  find(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) {
        return current;
      }
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  remove(data) {let current = this.rootNode;
    let parent = null;

    while (current && current.data !== data) {
      parent = current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (!current) return;

    // Узел с двумя детьми
    if (current.left && current.right) {
      let minRight = current.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      const minRightValue = minRight.data;
      this.remove(minRightValue);
      current.data = minRightValue;
    } else if (!parent) {
      // Узел — корень
      if (current.left) {
        this.rootNode = current.left;
      } else {
        this.rootNode = current.right;
      }
    } else {
      const child = current.left || current.right;
      if (parent.left === current) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    }
  }

  min() {
    let current = this.rootNode;
    while (current && current.left) {
      current = current.left;
    }
    return current ? current.data : null;
  }

  max() {
    let current = this.rootNode;
    while (current && current.right) {
      current = current.right;
    }
    return current ? current.data : null;
  }
  }

module.exports = {
  BinarySearchTree
};