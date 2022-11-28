const sum = require("./sum");
const mul = require("./mul");
const division = require("./division");
const subtract = require("./subtract");

const answerElement = document.getElementById("answer");
const inputElement = document.getElementById("input");
const numElements = Array.from(document.querySelectorAll(".number"));
const operatorBtn = Array.from(document.querySelectorAll(".operator"));
let firstValue;

numElements.forEach((btn) => {
	btn.addEventListener("click", handleButtonClick);
});

function handleButtonClick({ target }) {
	// remove default zero
	const currValue = inputElement.innerText;
	if (parseInt(currValue[0]) == 0) {
		inputElement.innerHTML = "";
	}
	inputElement.append(target.innerText);
}

operatorBtn.forEach((btn) => {
	btn.addEventListener("click", ({ target }) => {
		let result;
		const inputValue = inputElement.innerText;

		const operator = target.getAttribute("operator");

		if (operator === "plus") {
			if (inputValue[0] === "+" || inputValue.at(-1) === "+") {
				return;
			}

			inputElement.append("+");
		} else if (operator === "multiply") {
			if (inputValue[0] === "x" || inputValue.at(-1) === "x") {
				return;
			}

			inputElement.append("x");
		} else if (operator === "subtract") {
			console.log("inputValue operator: ", inputValue);
			if (inputValue[0] === "-" || inputValue.at(-1) === "-") {
				return;
			}
			inputElement.append("-");
		} else if (operator === "divide") {
			console.log("divide");

			if (inputValue[0] === "/" || inputValue.at(-1) === "/") {
				return;
			}

			inputElement.append("/");
		} else if (operator === "equal") {
			//  addition
			if (inputValue.includes("+")) {
				const values = inputValue.split("+");
				console.log("values", values);

				result = values.reduce((lastSum, value) => {
					return sum(parseInt(lastSum), parseInt(value));
				});
			}

			//  subtraction
			else if (inputValue.includes("-")) {
				const values = inputValue.split("-");

				result = values.reduce((lastSum, value) => {
					return subtract(parseInt(lastSum), parseInt(value));
				});
			}

			//  division
			else if (inputValue.includes("/")) {
				const values = inputValue.split("/");

				result = values.reduce((lastSum, value) => {
					return division(parseInt(lastSum), parseInt(value));
				});
			}

			//  multiplication
			else if (inputValue.includes("x")) {
				const values = inputValue.split("x");

				result = values.reduce((lastSum, value) => {
					return mul(parseInt(lastSum), parseInt(value));
				});
			}
		} else if (operator === "clear") {
			inputElement.innerText = "0";
			answerElement.innerText = "0";
		} else if (operator === "delete") {
			inputElement.innerText = inputValue.substring(
				0,
				inputValue.length - 1
			);
		}
		answerElement.innerText = result ?? 0;
	});
});
