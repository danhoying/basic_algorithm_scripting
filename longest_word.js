// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWord(str) {
  var longest = "";
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > longest.length) {
      longest = str[i];
    }
  }
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
