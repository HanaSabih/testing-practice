const reverse = require("../reverseString");

describe("take a string as an argument and return it reversed", () => {
  test("Return the reverse of string", () => {
    expect(reverse("hana")).toBe("anah");
  });
});
