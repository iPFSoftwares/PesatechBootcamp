(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const sum = require("./sum");
const mul = require("./mul");

console.log('test');

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
		}

		else if (operator === "multiply") {
			if (inputValue[0] === "x" || inputValue.at(-1) === "x") {
				return;
			}

			inputElement.append("x");
		}
		
		else if (operator === "equal") {
			let ans;
			if (inputValue.includes("+")) {
				const values = inputValue.split("+");
				console.log("values", values);
				ans = values.reduce((lastSum, value) => {
					return sum(parseInt(lastSum), parseInt(value));
				});
			} else if (inputValue.includes("x")) {
				const values = inputValue.split("x");
				console.log(values);
				ans = values.reduce((lastSum, value) => {
					return mul(parseInt(lastSum), parseInt(value));
				});
			}
			answerElement.innerText = ans ?? 0;
		}
		
		else if (operator === "clear") {
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

},{"./mul":2,"./sum":3}],2:[function(require,module,exports){
const mul = (a, b) => {
	if (typeof a != "number" || typeof b != "number") {
		throw `invalid data type`;
	}
	return a * b;
};

module.exports = mul;

// console.log('test2');
},{}],3:[function(require,module,exports){
const sum = (a, b) => {
	if (typeof a != "number" || typeof b != "number") {
		throw `invalid data type`;
	}
	return a+b;
};

module.exports = sum;

},{}]},{},[1]);
