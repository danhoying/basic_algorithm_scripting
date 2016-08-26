// Return the remaining elements of an array after chopping off n elements 
// from the head.

function slasher(arr, howMany) {
  var removed = 0;
  if (howMany > arr.length) {
    return [];
  } else if (howMany === 0) {
    return arr;
  } else {
    removed = arr.splice(howMany, arr.length);
    return removed;
  }
}

console.log(slasher(["burgers", "fries", "shake"], 1)); // ['fries', 'shake']
