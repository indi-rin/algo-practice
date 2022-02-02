/*
    Given a string of available characters and a string representing
    a document that you need to generate, write a function that
    determines if you can generate the document using the available
    characters. Return true if so; otherwise, return false.
*/

function generateDocument(characters, document) {
  // Write your code here.

  // create dict. of characters
  // loop through document, checking against the dict.

  let dictionary = {};

  // set up the dictionary by looping through characters
  for (let i = 0; i < characters.length; i++) {
    let current = characters[i];
    if (dictionary[current]) {
      dictionary[current]++;
    } else {
      dictionary[current] = 1;
    }
  }

  for (let i = 0; i < document.length; i++) {
    let current = document[i];
    if (dictionary[current] >= 1) {
      dictionary[current]--;
    } else {
      return false;
    }
  }

  return true;
}

/*
  Big O Complexity
  Time: O(n + m) - have to loop through both characters and document strings once
  Space: O(n) - created 1 new data structure (the dictionary)
*/
