import {getMonth} from "./Homework.js";

describe("tests for getMonth function", () => {
  
    it("return January", () => {
      expect(getMonth(1)).toBe("January");
    });
    it("return undefined", () => {
      expect(getMonth("")).toBe("undefined");
    })
    it("return December", () => {
      expect(getMonth(12)).toBe("December");
    })
    it("The test will be failed - should return undefined", () => {
      expect(getMonth(null)).toBe("June");
    })
  });