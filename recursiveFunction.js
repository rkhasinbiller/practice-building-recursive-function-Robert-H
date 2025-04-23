function reverseString () {
if (word.length === 1)
  return work[0];
return reverseString(word.slice(1)) + word[0];

}

console.log(reverseString("lived"));