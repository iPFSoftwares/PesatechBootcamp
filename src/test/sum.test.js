const sum = require("../sum");

test("properly adds two number", () => {
	expect(sum(2, 3)).toBe(5);
});
