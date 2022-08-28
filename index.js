function isPalindrome(word) {
  // Write your algorithm here

  const loweredWord = word.toLowerCase().split("");
	const reversedWord = loweredWord.reverse().join("");

      if (word === reversedWord) {
        return true;
      } else {
        return false;
      }
}

/* 
  Add your pseudocode here

    Create a function
  receives an argument
  Reverse the string
  Join the string
      if string === reversed string
          return true
        if not
          return false
*/

/*
  Add written explanation of your solution here

  Create a function that returns true if a word is a palindrome and false if it is not, meaning that it should do so if the term is the same in reverse.

   abba === abba //true
   abc === cba //false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
