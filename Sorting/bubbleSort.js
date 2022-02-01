/* 
    Write a function that takes in an array and returns
    a sorted version of that array. Use the Bubble Sort
    algorithm to sort the array.
*/

function bubbleSort(array) {
  // Write your code here.

  // checks 1st and 2nd elem, switching if necessary
  // iterates through entire array

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        // swap if out of order
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return array;
}

/*
  Big O Complexity
  Time: 
  Space: O(1) - no new data structures created
*/
