/*
    Write a function that takes in a string of lowercase English
    alphabet letters and returns the index of the string's first
    non-repeating character (i.e. the first character in the
    string that occurs only once). If the input string doesn't
    have any non-repeating characters, return -1.
*/

function firstNonRepeatingCharacter(string) {
    // Write your code here.
      
      
      // memoization - loop through string and check each char against a dictionary
      // first time a char appears, store its index in the dictionary
      // second time, set char in dictionary to neg num
      // return first char in dictionary with non-neg value at end
      
      const dictionary = {};
      
      for(let i = 0; i < string.length; i++) {
          let char = string[i];
          if(dictionary[char] || dictionary[char] === 0) {
              // because 0 is a falsy value, need to check specifically if index was 0
              dictionary[char] = -1;
          } else {
              dictionary[char] = i;
          }
          console.log(dictionary);
      }
      
      for(let chars in dictionary) {
          if(dictionary[chars] >= 0) {
              return dictionary[chars];
          }
      }
      
    return -1;
  }

  /*
    BIG O
    Time: O(n + m) - where n = input string's length and m = the dictionary's length
    Space: O(m) - because you have to create the dictionary (which at most would only
        have 26 elements in it so can an argument be made for constant space complexity?)
  */

// There is likely a better time complexity solution here involving hash tables over straight memoization - COME BACK TO THIS!