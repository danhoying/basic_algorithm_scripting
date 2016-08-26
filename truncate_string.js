// Truncate a string (first argument) if it is longer than the given maximum 
// string length (second argument). Return the truncated string with a ... ending.

// Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3, 
// then the addition of the three dots does not add to the string length in 
// determining the truncated string.

function truncateString(str, num) {
  var truncatedStr = "";
  for (var i = 0; i < str.length; i++) {
    truncatedStr = truncatedStr + (str[i]);
    if (truncatedStr.length === num - 3) {
      return truncatedStr + "...";
    } else if (truncatedStr.length === num) {
      return truncatedStr + "...";
    } else if (str.length <= num) {
      return str;
    }
  }
}

truncateString("Absolutely Longer", 2);