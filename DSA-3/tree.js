function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let curr = this.root;
    while (curr) {
      if (curr.value > value) {
        if (curr.left == null) {
          curr.left = node;
          break;
        } else {
          curr = curr.left;
        }
      } else {
        if (curr.right == null) {
          curr.right = node;
          break;
        } else {
          curr = curr.right;
        }
      }
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  search(value) {
    let curr = this.root;
    while (curr) {
      if (curr.value === value) {
        return true;
      } else if (curr.value > value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }

  min(root) {
    if (!root.left) {
      return root.value;
    }
    return this.min(root.left);
  }

  max(root) {
    if (!root.right) {
      return root.value;
    }
    return this.max(root.right);
  }

  BFS() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  delete(value) {
    this.root = this.deleteHelper(this.root, value);
  }

  deleteHelper(root, value) {
    if (root == null) {
      return root;
    }

    if (root.value > value) {
      root.left = this.deleteHelper(root.left, value);
    } else if (root.value < value) {
      root.right = this.deleteHelper(root.right, value);
    } else {
      if (!root.right && !root.left) {
        return null;
      }
      if (!root.right) {
        return root.left;
      } else if (!root.left) {
        return root.right;
      }

      root.value = this.min(root.right);
      root.right = this.deleteHelper(root.right, root.value);
    }
    return root;
  }

  printPrimes(root) {
    if (root) {
      this.printPrimes(root.left);
      if (isPrime(root.value)) {
        console.log(root.value);
      }
      this.printPrimes(root.right);
    }
  }
  secondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) {
      return null;
    }
    let current = this.root;
    while (current) {
      if (current.left && !current.right) {
        return this.findLargest(current.left);
      }
      if (current.right && !current.right.left && !current.right.right) {
        return current.value;
      }
      current = current.right;
    }
  }

  findLargest(node) {
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }

  countNodes(node) {
    if (node === null) {
      return 0;
    }
    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }

  checkingBST(root) {
    let arr = [];
    this.bst(root, arr);
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  bst(root, arr) {
    if (root) {
      this.bst(root.left, arr);
      arr.push(root.value);
      this.bst(root.right, arr);
    }
  }
  
}

let tree = new Tree();
let bst = new Tree();
tree.insert(10);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(23);
tree.insert(12);
tree.insert(1);
tree.insert(11);
tree.insert(17);

// console.log(`In-order Traversal:`);
// tree.inOrder(tree.root);

// console.log('pre-orde`r Traversal:');
// tree.preOrder(tree.root)

// console.log('post-order Traversal:');
// tree.postOrder(tree.root)

// console.log(tree.search(30));

// console.log(tree.min(tree.root));
// console.log(tree.max(tree.root));

// console.log(`BFS:`);
// tree.BFS()

// tree.delete(10)
// console.log('after delete:');
// tree.inOrder(tree.root);

// console.log("Prime numbers in the tree:");
// tree.printPrimes(tree.root);

// console.log(tree.secondLargest());

// console.log("Height of the tree:", tree.getHeight());
// console.log("Number of nodes in the tree:", tree.countNodes(tree.root));

// ====================================================================================================================================================================================================

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class Tree {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         const newNode = new Node(value);
//         if (!this.root) {
//             this.root = newNode;
//             return;
//         }
//         let current = this.root;
//         while (true) {
//             if (value < current.value) {
//                 if (!current.left) {
//                     current.left = newNode;
//                     return;
//                 }
//                 current = current.left;
//             } else if (value > current.value) {
//                 if (!current.right) {
//                     current.right = newNode;
//                     return;
//                 }
//                 current = current.right;
//             } else {
//                 // Value already exists in the tree, do nothing
//                 return;
//             }
//         }
//     }

    // areIdenticalShapes(tree1, tree2) {
    //     return this.checkShapes(tree1.root, tree2.root);
    // }

    // checkShapes(node1, node2) {
    //     // Base case: If both nodes are null, they are identical
    //     if (node1 === null && node2 === null) {
    //         return true;
    //     }
    //     // If only one of the nodes is null, they are not identical
    //     if (node1 === null || node2 === null) {
    //         return false;
    //     }
    //     // Recursively check the shapes of the left and right subtrees
    //     return (
    //         this.checkShapes(node1.left, node2.left) &&
    //         this.checkShapes(node1.right, node2.right)
    //     );
    // }
// }

// // Example usage:
// let tree1 = new Tree();
// tree1.insert(10);
// tree1.insert(7);
// tree1.insert(15);
// tree1.insert(5);
// tree1.insert(23);

// let tree2 = new Tree();
// tree2.insert(10);
// tree2.insert(7);
// tree2.insert(15);
// tree2.insert(5);
// tree2.insert(23);


// console.log("Are the trees identical in shape?", tree1.areIdenticalShapes(tree1, tree2));
