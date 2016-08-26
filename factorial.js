function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  var fact = num;
  for (var i = 1; i < num; i++) {
    fact *= i;
  }
  return fact;
}

factorialize(5);
