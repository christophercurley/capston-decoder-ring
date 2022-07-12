// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusSquare = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42, 
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  }

  function checkIfLetter(string) {
    return /^[a-zA-Z]+$/.test(string);
  }

  function checkIfAnAlphanumericValue(string) {
    return /^[a-zA-Z0-9]+$/.test(string);
  }

  function polybiusEncode(input) {
    let message = "";
    for (const i in input) {
      const letter = input[i].toLowerCase();
      checkIfLetter(letter) ? message += polybiusSquare[letter] : message += letter;
    }
    return message;
  }

  function polybiusDecode(input) {
    let message = "";
    let couplet = "";
    for (let i = 0; i < input.length; i++) {
      const letter = input[i];
      if (!checkIfAnAlphanumericValue(letter)) {
        message += letter;
        continue;      
      }
      couplet += letter;
      if (couplet.length === 2) {
        if (couplet === '42') message += '(i/j)';
        else message += Object.keys(polybiusSquare).find(el => polybiusSquare[el] == couplet);
        couplet = "";
      }
    }
    return message;
  }  

  function polybius(input, encode = true) {
    let message = "";
    if (encode) message = polybiusEncode(input);
    else {
      if (input.replace(/\s/g,'').length % 2 !== 0) return false;
      message = polybiusDecode(input);
    }
    return message;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
