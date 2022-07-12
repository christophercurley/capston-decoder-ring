// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const substitutionKey = {
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "", 
    k: "",
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
    q: "",
    r: "",
    s: "",
    t: "",
    u: "",
    v: "",
    w: "",
    x: "",
    y: "",
    z: "",
  }

  function generateSubKey(alphabet) {
    count = 0;
    Object.keys(substitutionKey).forEach(el => {
      substitutionKey[el] = alphabet[count];
      count++;
    });
  }

  function isASpace(letter) {
    return /\s/.test(letter);
  }

  function subEncode(input){
    let message = "";
    for (const i in input) {
      const letter = input[i].toLowerCase();
      isASpace(letter) ? message += letter : message += substitutionKey[letter];
    }
    return message;
  }

  function decode(letter) {
    let decodedLetter = Object.keys(substitutionKey).find(el => substitutionKey[el] === letter);
    return decodedLetter;
  }

  function subDecode(input){
    let message = "";
    for (const i in input){
      const letter = input[i].toLowerCase();
      isASpace(letter) ? message += letter : message += decode(letter);
    }
    return message;
  }

  function hasDuplicateCharacters(alphabet) {
    let hasDup = null;
    for (const i in alphabet) {
      const letter = alphabet[i];
      alphabet.indexOf(letter) !== alphabet.lastIndexOf(letter) ? hasDup = true : hasDup = false;
    }
    return hasDup;
  }

  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length !== 26 || hasDuplicateCharacters(alphabet)) return false;
    let message = "";
    generateSubKey(alphabet);
    encode ? message = subEncode(input) : message = subDecode(input);
    return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
