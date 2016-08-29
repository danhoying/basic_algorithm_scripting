function rot13(str) {   
  return str.replace(/[A-Z]/g, function(n) {
    var code = n.charCodeAt(n);
    if (code >= 78 && code <= 91) {
      code = code - 13;
    } else if (code >= 65 <= 78) {
      code = code + 13;   
    }
    return String.fromCharCode(code);
  });
}

console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
// THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.
