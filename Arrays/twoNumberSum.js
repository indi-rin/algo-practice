/*
    Given a non-empty array of distinct integars and a target sum,
    write a function that determines if any two integars in the
    array add up to the target sum and return them in an array,
    or else return an empty array if no two integars add up to
    the target sum.
*/

function twoNumberSum(array, targetSum) {
  // Write your code here.

  const pair = [];

  // loops through array, holding in value
  // compare target sum with second loop through array

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        pair.push(array[i]);
        pair.push(array[j]);
        return pair;
      }
    }
  }

  return pair; // if making through entire double loops w/o returning true
}

/*
  Big O Complexity
  Time: 2O(n) - have to loop through the input array twice
  Space: O(1) - no new data structure created, beyond the required return array
  (could also be thought of as O(n) space if you ount the required return array)
*/
