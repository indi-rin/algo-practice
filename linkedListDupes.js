/*
    Given the head of a Singly Linked List whose nodes are sorted by value,
    write a function that returns a modified version of the Linked List that
    doesn't contain any nodes with duplicate values. The Linked List should be
    modified in place (i.e. you shouldn't create a brand new list), and the
    modified Linked List should still have its nodes sorted by value.

    Each node has an integar value and a next node pointing to the next node in
    the list or to null if it's the tail of the list.
*/

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // any duplicates would be next to each other in the LL
  // hold a node, look at the next node and check if the same
  // if not, keep going
  // if same, set current node's next to the next's next

  // remember: input is the head node

  let node = linkedList;

  // loop as long as we're not on the tail node
  while (node.next) {
    let second = node.next;

    // check if node value and the next node value are equal, i.e. duplicates
    // taking into account the potential for multiple duplicates in a row
    while (node.value === second.value) {
      // check if at tail node
      if (!second.next) {
        node.next = null;
        break;
      } else {
        node.next = second.next;
        second = second.next;
      }
    }

    node = second; // move on to next node in LL
  }

  return linkedList;
}

/*
  Big O Complexity
  Time: O(n) - have to loop through the entirety of the linked list but only once
  Space: O(1) - there are no additional data structures created
*/
