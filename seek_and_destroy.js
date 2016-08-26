// You will be provided with an initial array (the first argument in the 
// destroyer function), followed by one or more arguments. Remove all elements 
// from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  var removed = [];
  var filtered = 0;
  var args = Array.prototype.slice.call(arguments);
  for (var i = 1; i < args.length; i++) {
    removed.push(args[i]);
  }
  for (var j = 0; j < arr.length; j++) {
    for (var z = 0; z < removed.length; z++) {
      if (arr[j] === removed[z]) {
        delete arr[j];
      }
    }
  }
  return arr.filter(Boolean);
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // ["hamburger"]
console.log(destroyer([1, 3, 4, 5, 4, 3], 3, 4)); // [1, 5]
