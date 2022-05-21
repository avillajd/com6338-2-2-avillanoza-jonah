// takes in a string and returns true/false depending
// on if the string is a palindrome
// (the same backwards as forwards)
function isPalindrome(str) {
  return str === str.split("").reverse().join("")
}

var word = prompt('Enter a word')

var wordExistsAndIsPalindrome = word && isPalindrome(word)

if (wordExistsAndIsPalindrome) {
  alert(word + " is a palindrome")
} else {
  alert(word + " is NOT a palindrome")
}

var ageOfUserInYears = 30