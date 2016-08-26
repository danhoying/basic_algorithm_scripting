// Return the provided string with the first letter of each word
// capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting 
// words like "the" and "of".

function titleCase(str) {
  var upper = "";
  str = str.toLowerCase();
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    upper =  upper + str[i][0].toUpperCase();
    for (var j = 1; j < str[i].length; j++) {
      upper = upper + str[i][j];
    }
    upper = upper + " ";
  }
  return upper.trim();
}

titleCase("I'm a little tea pot");

