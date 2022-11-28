(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const sum = require("./sum");
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
	if (parseInt(currValue[0]) === 0) {
		inputElement.innerHTML = "";
	}
	inputElement.append(target.innerText);
}

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
	});
});

},{"./subtract":2,"./sum":3}],2:[function(require,module,exports){
const subtract = (a, b) => {
	if (typeof a != "number" || typeof b != "number") {
		throw `invalid data type`;
	}
	return a - b;
};

module.exports = subtract;

},{}],3:[function(require,module,exports){
const sum = (a, b) => {
	if (typeof a != "number" || typeof b != "number") {
		throw `invalid data type`;
	}
	return a + b;
};

module.exports = sum;

},{}]},{},[1]);
