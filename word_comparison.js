// Return true if the string in the first element of the array contains all of 
// the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the 
// letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" 
// does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in 
// "line" are present in "Alien".

function mutation(arr) {
  var lower = 0;
  var newArr = [];
  var testArray = [];
  for (var i = 0; i < arr.length; i++) {
    lower = arr[i].toLowerCase();
    newArr.push(lower);
  }
  var firstWord = newArr[0];
  var secondWord = newArr[1];
  for (var j = 0; j < secondWord.length; j++) {
    if (firstWord.includes(secondWord[j])) {
      testArray.push(true);
    } else {
      testArray.push(false);
    }
  }
  for (var z = 0; z < testArray.length; z++) {
    if (testArray[z] === false) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);