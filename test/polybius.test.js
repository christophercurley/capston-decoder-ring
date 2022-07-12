const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("Polybius()", () => {
  describe("Encoding:", () => {
    it("translates both i and j to 42.", () => {
      const expected = "4242232345";
      const input = "jimmy";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });
    it("maintains spaces when encoding.", () => {
      const expected = "11 12423351 411145 124324 11 32425251";
      const input = "a fine day for a hike";
      const actual = polybius(input);
      expect(actual).to.equal(expected); 
    });
  });

  describe("Decoding:", () => {
    it("translates 42 to (i/j).", () => {
       const expected = "(i/j)";
       const input = "42";
       const actual = polybius(input, false);
       expect(actual).to.equal(expected);
    });
    it("maintains spaces when decoding.", () => {
      const expected = "a f(i/j)ne day for a h(i/j)ke";
      const input = "11 12423351 411145 124324 11 32425251";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });
    it("returns false if the length of the message to be decoded (minus whitespaces) is odd.", () =>{
      const input = "11 42123351 411145 124324 11 3242525";
      const actual = polybius(input, false);
      expect(actual).to.be.false;
    });
  });
});
