// live coding

class Calculate {
  constructor() {
    this.total = 0;
    console.log("Initial total: ", this.total);
  }
  //add
  addNumbers(a, b) {
    return (this.total = a + b);
  }
  //subtract
  subtractNumbers(a, b) {
    return (this.total = a - b);
  }
  //multiply
  multiplyNumbers(a, b) {
    return (this.total = a * b);
  }
  //divide
  divideNumbers(a, b) {
    return (this.total = a / b);
  }
}

class App {
  constructor() {
    this.calc = new Calculate();

    //prompts (3)

    //store the first number
    this.firstPrompt = prompt("Please enter your first number:");
    this.firstNumber = parseInt(this.firstPrompt);
    console.log(typeof this.firstNumber, this.firstNumber);
    //store the operator (+, -, *, /)
    this.operator = prompt("Please enter an operator (+, -, x, /):");
    console.log(this.operator);
    //store the second number
    this.secondPrompt = prompt("Please enter your second number:");
    this.secondNumber = parseInt(this.secondPrompt);
    console.log(typeof this.secondNumber, this.secondNumber);
  }
  //call the calculation above
  callCalculations() {
    //switch statement
    switch (this.operator) {
      case "+":
        this.calc.addNumbers(this.firstNumber, this.secondNumber);
        break;
      case "-":
        this.calc.subtractNumbers(this.firstNumber, this.secondNumber);
        break;
      case "x":
        this.calc.multiplyNumbers(this.firstNumber, this.secondNumber);
        break;
      case "/":
        this.calc.divideNumbers(this.firstNumber, this.secondNumber);
        break;
      default:
        return alert("Please enter a valid operator.");
        break;
    }
  }
  displayResult() {
    this.equation = `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.calc.total}`;
    alert(this.equation);
    console.log(this.equation);
  }

  //display the results of the calculation
}

let startApp = new App();
startApp.callCalculations();
startApp.displayResult();
