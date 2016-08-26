// Return true if the given string is a palindrome. Otherwise, return 
// false. 

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

palindrome("five|\_/|four");
