// Write a function that splits an array (first argument) into groups the length 
// of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var chunked = [];
  var chunk = 0;
  chunk = arr.slice(0, size);
  chunked.push(chunk);
  for (var i = size; i < arr.length; i += (size)) {
    chunk = arr.slice(i, i + size);
    chunked.push(chunk);
  }
  return chunked;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);