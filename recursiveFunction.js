function reverseString (word) {
if (word.length === 1)
  return word[0];
return reverseString(word.slice(1)) + word[0];

}

console.log(reverseString("live"));