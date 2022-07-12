// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function generateKey(shift) {
    const alphabet = [    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    ]
    let encryptionKey = {
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
  
    for (let i = 0; i < Object.keys(encryptionKey).length; i++) {
      const baseLetter = alphabet[i];    
      if (i + shift > 25) {
        encryptionKey[baseLetter] = alphabet[i + shift - 26];
      } else if (i + shift < 0) {
        encryptionKey[baseLetter] = alphabet[i + shift + 26];
      } else {    
        encryptionKey[baseLetter] = alphabet[i + shift];
      }
    }
    return encryptionKey;
  }
  
  function checkIfLetter(string) {
    return /^[a-zA-Z]+$/.test(string);
  }

  function caesarEncode(input, encryptionKey, message) {
    for (const entry in input){
      const letter = input[entry].toLowerCase();
      if (checkIfLetter(letter)) {
        message += encryptionKey[letter];
        } else message += letter;
      } 
    return message;
  }

  function caesarDecode(input, encryptionKey, message) {
    for (const entry in input){
      const letter = input[entry].toLowerCase();
      if (checkIfLetter(letter)) {
        message += Object.keys(encryptionKey).find(key => encryptionKey[key] === letter);
        } else message += letter;    
      } 
    return message;  
  }

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false;
    let message = ""
    const encryptionKey = generateKey(shift);
    if (encode) message = caesarEncode(input, encryptionKey, message);
    else message = caesarDecode(input, encryptionKey, message);  
    return message;
    }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
