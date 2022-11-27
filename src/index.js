const sum = require("./sum");

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
		const inputValue = inputElement.innerText;

		const operator = target.getAttribute("operator");
		console.log(operator);
		if (operator === "plus") {
			if (inputValue[0] === "+" || inputValue.at(-1) === "+") {
				return;
			}

			inputElement.append("+");
		} else if (operator === "equal") {
			const values = inputValue.split("+");
			console.log("values", values);

			const _sum = values.reduce((lastSum, value) => {
				return sum(parseInt(lastSum), parseInt(value));
			});
			answerElement.innerText = _sum ?? 0;
		} else if (operator === "clear") {
			inputElement.innerText = "0";
			answerElement.innerText = "0";
		} else if (operator === "delete") {
			inputElement.innerText = inputValue.substring(
				0,
				inputValue.length - 1
			);
		}
	});
});
