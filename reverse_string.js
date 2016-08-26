function reverseString(str) {
  str = str.split("");
  var arr = [];
  for (var i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  str = arr.join("");
  return str;
}

reverseString("hello");

