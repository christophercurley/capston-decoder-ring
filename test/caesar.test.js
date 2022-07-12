const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  describe("Error Handling:", () => {
    it("returns false if shift value is 0.", () => {
      const input = "Hello friends.";
      const shift = 0;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });
    it("returns false if shift value is greater than 25.", () => {
      const input = "Hello friends.";
      const shift = 26;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });
    it("returns false if shift value is less than -25.", () => {
      const input = "Hello friends.";
      const shift = -26;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });
  });

  describe("Encoding:", () => {
      it("ignores capital letters.", () => {
        const input = "ZEBRA MAGAZINE";
        const shift = 3;
        const expected = "cheud pdjdclqh";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
      });
      it("can shift to the right at the end of the alphabet", () => {
        const input = "xyz";
        const shift = 3;
        const expected = "abc";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
      });
      it("can shift to the left at the beginning of the alphabet", () => {
        const input = "abc";
        const shift = -3;
        const expected = "xyz";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
      });
      it("maintains spaces and nonalphabetic characters.", () => {
        const input = "a message.";
        const shift = 3;
        const expected = "d phvvdjh.";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
      });

  });

  describe("Decoding:", () => {
    it("ignores capital letters.", () => {
      const input = "CHEUD PDJDCLQH";
      const shift = 3;
      const expected = "zebra magazine";
      const actual = caesar(input, shift, false);
      expect(actual).to.equal(expected);
    });
    it("can shift to the left at the beginning of the alphabet", () => {
      const input = "abc";
      const shift = 3;
      const expected = "xyz";
      const actual = caesar(input, shift, false);
      expect(actual).to.equal(expected);
    });
    it("can shift to the right at the end of the alphabet", () => {
      const input = "xyz";
      const shift = -3;
      const expected = "abc";
      const actual = caesar(input, shift, false);
      expect(actual).to.equal(expected);
    });
    it("maintains spaces and nonalphabetic characters.", () => {
      const input = "d phvvdjh.";
      const shift = 3;
      const expected = "a message.";
      const actual = caesar(input, shift, false);
      expect(actual).to.equal(expected);
    });
  });
});

