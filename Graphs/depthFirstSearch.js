/*
    Given a Node class that has a name and an array of optional
    children nodes (forming an acyclic tree-like structure), write
    a depthFirstSearch method on the Node class which takes an empty
    array, traveres the tree using Depth-first Search (from left
    to right), stores all the nodes' names in the input array,
    and returns it.
*/

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.

    // DFS = stack
    // start at root node, check for children
    // children get added to the stack
    // process the node (i.e. add its name to input array)
    // go through, repeating until stack is empty

    const stack = this.children;
    array.push(this.name); // start with root node

    while (stack.length > 0) {
      let current = stack.shift(); // stack, so taking off the front of the array
      if (current.children.length > 0) {
        for (let i = current.children.length - 1; i >= 0; i--) {
          stack.unshift(current.children[i]); // adding to front of array (stack)
        }
      }
      array.push(current.name); // add current node's name to the input array
    }

    return array;
  }
}

// could also be done recursively (as it always the case with stacks)

/*
  Big O Complexity
  Time: O(v + e) - traverse the entire graph once
  Space: O(v) - create one new DS (stack)
  where v is number of vertices on the graph
  and e is the number of edges
*/
