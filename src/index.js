const sum = require("./sum");
const division = require("./division");
const subtract = require("./subtract");


const answerElement = document.getElementById("answer");
const inputElement = document.getElementById("input");
const numElements = Array.from(document.querySelectorAll(".number"));
const operatorBtn = Array.from(document.querySelectorAll(".operator"));
const _operator = "";
let firstValue;

numElements.forEach((btn) => {
	btn.addEventListener("click", handleButtonClick);
});

function handleButtonClick({ target }) {
	// remove default zero
	const currValue = inputElement.innerText;
	if (parseInt(currValue[0]) === 0) {
		inputElement.innerHTML = "";
	}
	inputElement.append(target.innerText);
}
let result;
operatorBtn.forEach((btn) => {
	btn.addEventListener("click", ({ target }) => {
		const inputValue = inputElement.innerText;

		const operator = target.getAttribute("operator");
		console.log("operator: ", operator);
		if (operator === "plus") {

			if (inputValue[0] === "+" || inputValue.at(-1) === "+") {
				return;
			}

			inputElement.append("+");

		} 
		else if (operator === "divide") {
			
			console.log("divide");
	
			if (inputValue[0] === "/" || inputValue.at(-1) === "/") {
				return;
			}
			
	
			inputElement.append("/");
		} 
		else if (operator === "equal") {

			if(inputValue.includes("+")){
				const values = inputValue.split("+");
				console.log("values", values);

				 result = values.reduce((lastSum, value) => {
					return sum(parseInt(lastSum), parseInt(value));
				});


			} else if(inputValue.includes("/")){
				const values = inputValue.split("/");
				console.log("values", values);

				 result = values.reduce((lastSum, value) => {
					return division(parseInt(lastSum), parseInt(value));
				});
			}


		}else if (operator === "subtract") {
			console.log("inputValue operator: ", inputValue);
			if (inputValue[0] === "-" || inputValue.at(-1) === "-") {
				return;
			}
			inputElement.append("-");
		} else if (operator === "equal") {

			let result;
			if(inputValue.includes('+')) {
				const values = inputValue.split("+");
				console.log("values", values);
				result = values.reduce((lastSum, value) => {
					return sum(parseInt(lastSum), parseInt(value));
				});
			}else if(inputValue.includes('-')) {
				const substractValues = inputValue.split("-");
				result = substractValues.reduce((value1, value2) => {
					return subtract(parseInt(value1), parseInt(value2));
				});
			}
			answerElement.innerText = result ?? 0;


		} else if (operator === "clear") {
			inputElement.innerText = "0";
			answerElement.innerText = "0";
		} else if (operator === "delete") {
			console.log("Five: ");
			inputElement.innerText = inputValue.substring(
				0,
				inputValue.length - 1
			);
		}
		answerElement.innerText = result ?? 0;
	});
});