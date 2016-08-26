// Return true if the given string is a palindrome. Otherwise, return 
// false. 

// You'll need to remove all non-alphanumeric characters (punctuation, spaces 
// and symbols) and turn everything lower case in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and 
// "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3  3a2", 
// and "2_A3*3#A2".

function palindrome(str) {
  var newStr = "";
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    var code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      str;
    } else {
    newStr += ch;
    }
  }
  var arr = newStr.split("");
  arr = arr.reverse();
  arr = arr.join("");
  if (arr === newStr) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("five|\_/|four")); // false
console.log(palindrome("raceCar")); // true
console.log(palindrome("five)(??evif")); // true
