/*
    Given a non-empty string of lowercase letters and a non-negative
    integar representing a key, write a function that returns a new
    string obtained by shifting every letter in the input string by
    k positions in the alphabet, where k is the key.
*/

function caesarCipherEncryptor(string, key) {
  // Write your code here.

  // array of all letters in order to function as the cypher circle
  const cypher = "abcdefghijklmnopqrstuvwxyz";
  // how to keep track of the wraparound?
  // 26 letters, so if the letter index is greater than 26 - k, it needs to wrap

  // cypher.indexOf(each char in input srting)

  let newWord = "";

  console.log("orig: ", string);
  console.log("key: ", key);

  // simplify key so if it's greater than 26, it becomes its less than 26 equiv
  key = key % 26;

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    let currentCyphdex = cypher.indexOf(currentChar);

    if (currentCyphdex > 25 - key) {
      // needs to wrap around (25 because index starts at 0)
      let wrap = 25 - cypher.indexOf(currentChar);
      newWord += cypher[key - (wrap + 1)]; // add to cyphered word
    } else {
      newWord += cypher[currentCyphdex + key]; // add to cyphered word
    }
  }

  return newWord;
}

/*
  Big O Complexity
  Time: O(n) - need to run through the entire input string
  Space: O(n) - need to create the cypher string
*/
