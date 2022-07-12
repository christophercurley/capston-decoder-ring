const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  describe("Error Handling:", () => {
    it("returns false if the given alphabet isn't exactly 26 chars long.", () => {
      const alphabet = "a";
      const message = "message";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
    it("returns false if there are duplicate chars in the alphabet.", () => {
      const alphabet = "abcabcabcabcabcabcabcabcab";
      const message = "message";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
    it("returns false if no alphabet is supplied.", () => {
      const message = "message";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });
  });

  describe("Encoding:", () => {
    it("correctly encodes a message given a substitution alphabet.", () => {
      const message = "You are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const expected = "elp xhm xf mbymwwmfj dne";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(expected);
    });
    it("maintains spaces of original message.", () => {
      const message = "You are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const expected = "elp xhm xf mbymwwmfj dne";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(expected);
    });
    it("ignores upper case letters when encoding.", () => {
      const message = "YOU ARE AN EXCELLENT SPY";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const expected = "elp xhm xf mbymwwmfj dne";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(expected);
    });
    it("works with any kind of unique character.", () => {
      const message = "You are an excellent spy";
      const alphabet = ".oyqmcgrukswaflnthdjpzibev";
      const expected = "elp .hm .f mbymwwmfj dne";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(expected);
    });    
  });

  describe("Decoding:", () => {
    it("decodes the message properly", () => {
      const message = "d&ccv yp zbx&ge";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const expected = "hello my friend";
      const actual = substitution(message, alphabet, false);
      expect(actual).to.equal(expected);
    });
    it("works with unique characters.", () => {
      const message = "d&ccv yp zbx&ge";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const expected = "hello my friend";
      const actual = substitution(message, alphabet, false);
      expect(actual).to.equal(expected);
    });
    it("preserves spaces.", () => {
      const message = "d&ccv yp zbx&ge";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const expected = "hello my friend";
      const actual = substitution(message, alphabet, false);
      expect(actual).to.equal(expected);
    });
    it("ignores capital letters", () => {
      const message = "D&CCV YP ZBX&GE";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const expected = "hello my friend";
      const actual = substitution(message, alphabet, false);
      expect(actual).to.equal(expected);
    });
  });
});
