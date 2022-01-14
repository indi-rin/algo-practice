/*
    Write a function that takes in a non-empty string
    and returns a boolean whether or not the string is
    a palindrome. Single-character strings count.
*/

function isPalindrome(strring) {
  // check if first and last char are the same
  // if not, return false
  // if true recursively call on a substring
  // base case: string length 1

  if (string.length <= 2) {
    // base case(s)
    if (string.length === 1) {
      return true; // single-char strings are paildromes
    } else {
      if (string[0] === string[1]) {
        return true; // palindrome if they match
      } else {
        return false; // not a palindrome if they don't
      }
    }
  } else {
    if (string[0] === string.slice(-1)) {
      // recursive call if front and end match
      return isPalindrome(string.slice(1, -1));
    } else {
      return false; // not a palindrome if they don't match
    }
  }
}

/*
  Big O Complexity
  Time: O(n) - have to loop through the length of the input string once
  Space: O(1) - no new data structures are created
*/
