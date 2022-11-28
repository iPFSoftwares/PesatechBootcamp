const subtract = require("../subtract");

test("properly subtracts two numbers", () => {
	expect(subtract(3, 2)).toBe(1);
});
