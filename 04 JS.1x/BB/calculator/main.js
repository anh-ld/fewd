class CalculatorApp {
	constructor(element) {
		this.element = element;
		this.element.addEventListener('click', this.handle.bind(this));

		this.displayNumber = "0";
		this.tempNumber = "";
		this.operator = "";
		this.isPrevOpe = true;
		this.render();
	}

	createNumberButton(start, end) {
		for (let i = start; i <= end; i++) {
			const button = document.createElement("button");
			button.innerText = i;
			this.element.appendChild(button);
		}
	}

	createOperatorButton(symbol, action) {
		const button = document.createElement('button');
		button.innerText = symbol;
		button.setAttribute('data-action', action);
		this.element.appendChild(button);
	}

	createDisplay() {
		const display = document.createElement('div');
		display.className = "display";
		display.innerText = this.displayNumber;
		this.element.appendChild(display);
	}

	createView() {
		const view = document.createElement('div');
		view.innerText = `Operation: ${this.tempNumber} ${this.operator} ${this.displayNumber}`;
		this.element.appendChild(view);
	}

	calculate(num1, num2, op) {
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		switch(op) {
			case "plus":
				return num1 + num2;
			case "minus":
				return num1 - num2;
			case "multiply":
				return Math.round((num1 * num2) * 1000) /1000;
			case "devide":
				return Math.round((num1 / num2) * 1000) /1000;
			default: return 0;
		}
	}

	handleNumberInput(e) {
		if (this.displayNumber === "0" || this.isPrevOpe) {
			this.displayNumber = e.target.textContent;
			this.isPrevOpe = false;
		} else {
			this.displayNumber += e.target.textContent;
		}
	}

	handleDecimal() {
		if (!this.displayNumber.includes(".") || this.isPrevOpe) {
			if (this.isPrevOpe) {
				this.displayNumber = "0.";
				this.isPrevOpe = false;
			} else {
				this.displayNumber += ".";
			}
		}
	}

	handleOperator(action) {
		if (!this.isPrevOpe) {
			if (this.tempNumber !== "") {
				const result = this.calculate(this.tempNumber, this.displayNumber, this.operator);
				this.displayNumber = result.toString();
				this.tempNumber = this.displayNumber;
			}
			else {
				this.tempNumber = this.displayNumber;
			}
		}
		this.operator = action;
		this.isPrevOpe = true;
	}

	handleEqual() {
		const result = this.calculate(this.tempNumber, this.displayNumber, this.operator);
		this.displayNumber = result.toString();
		this.isPrevOpe = true;
		// handle click "=" multiple times
		if (this.operator === "plus" || this.operator === "minus") {
			this.tempNumber = 0;
		} else {
			this.tempNumber = 1;
		}
	}

	handleClear() {
		this.displayNumber = "0";
		this.tempNumber = "";
		this.operator = "";
		this.isPrevOpe = true;
	}

	handle(e) {
		if (!e.target.matches('button')) return;
		const action = e.target.dataset.action;

		if (!action) {
			this.handleNumberInput(e);
		}
		else {
			if (action === "decimal") {
				this.handleDecimal();
			}
			else if (action === "equal") {
				this.handleEqual();	
			} else if (action === "clear") {
				this.handleClear();	
			}
			else {
				this.handleOperator(action);
			}
		}
		// console.log(this.isPrevOpe);
		this.render();
	}

	render() {
		this.element.innerHTML = '';
		this.createOperatorButton("=", "equal");
		this.createDisplay();
		this.createNumberButton(1, 3);
		this.createOperatorButton("+", "plus");
		this.createNumberButton(4, 6);
		this.createOperatorButton("-", "minus");
		this.createNumberButton(7, 9);
		this.createOperatorButton("x", "multiply");
		this.createOperatorButton("C", "clear");
		this.createNumberButton(0, 0);
		this.createOperatorButton(".", "decimal");
		this.createOperatorButton("/", "devide");
		// this.createView();
	}
}

const cal = new CalculatorApp(document.querySelector('.calculator'));