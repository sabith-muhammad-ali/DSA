class Node {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;
    for (let value of word) {
      if (!curr.children[value]) {
        curr.children[value] = new Node();
      }
      curr = curr.children[value];
    }
    curr.isEnd = true;
  }

  startWithPrefix(word) {
    let curr = this.root;
    for (let value of word) {
      if (!curr.children[value]) {
        return "no matching prefix";
      }
      curr = curr.children[value];
    }
    this.display(curr, word);
  }

  display(root, prifix = "") {
    if (root.isEnd) {
      console.log(prifix);
    }
    for (let value in root.children) {
      this.display(root.children[value], prifix + value);
    }
  }

  delete(word) {
    this.deleteHelper(this.root, word, 0);
  }

  deleteHelper(root, word, level) {
    if (root == null) {
      return true;
    }

    if (word.length == level) {
      if (root.isEnd) {
        root.isEnd = false;
      }
      return Object.keys(root.children).length == 0;
    }
    let child = root.children[word[level]];
    let deleted = this.deleteHelper(child, word, level + 1);

    if (deleted) {
      delete root.children[word[level]];
    }
    return false;
  }

  search(word) {
    let curr = this.root;
    for (let value of word) {
      if (!curr.children[value]) {
        return false;
      }
      curr = curr.children[value];
    }
    if (curr.isEnd) {
      return true;
    } else {
      return false;
    }
  }
}

const trie = new Trie()
trie.insert('apple')
trie.insert('banana')
trie.insert('app')
// console.log(trie.search("apple"))
trie.display(trie.root)
trie.delete('banana')
console.log('after delete:');
trie.display(trie.root)
