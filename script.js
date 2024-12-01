document.addEventListener('DOMContentLoaded', () => {
	const display = document.querySelector('.display');
	const buttons = document.querySelectorAll(
		'.operator, .number, .clear, .equal'
	);
	let firstNumber = '';
	let secondNumber = '';
	let operator = '';
	let result = '';
	let isResultDisplayed = false;

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			if (button.classList.contains('number')) {
				if (isResultDisplayed) {
					firstNumber = button.textContent;
					display.textContent = firstNumber;
					isResultDisplayed = false;
				} else {
					if (!operator) {
						firstNumber += button.textContent;
						display.textContent = firstNumber;
					} else {
						secondNumber += button.textContent;
						display.textContent = secondNumber;
					}
				}
			}

			if (button.classList.contains('operator')) {
				operator = button.textContent;
			}

			if (button.classList.contains('clear')) {
				firstNumber = '';
				secondNumber = '';
				operator = '';
				display.textContent = '0';
				isResultDisplayed = false;
			}

			if (button.classList.contains('equal')) {
				if (!firstNumber || !secondNumber || !operator) return;

				if (operator === '/' && secondNumber === '0') {
					display.textContent = 'Error';
					return;
				}

				result = operate(
					parseFloat(firstNumber),
					parseFloat(secondNumber),
					operator
				);
				display.textContent = result;
				firstNumber = result;
				secondNumber = '';
				operator = '';
				isResultDisplayed = true;
			}
		});
	});
});

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(a, b, operator) {
	switch (operator) {
		case '+':
			return add(a, b);
		case '-':
			return subtract(a, b);
		case '*':
			return multiply(a, b);
		case '/':
			return divide(a, b);
	}
}
