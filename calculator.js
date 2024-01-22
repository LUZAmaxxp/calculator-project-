const calculate = (n1, operator, n2) => {
  let result = "";
  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result;
};
function isNumeric(str) {
  if (typeof str != "string") return false; //
  return !isNaN(str) && !isNaN(parseFloat(str));
}

const clear = (display) => {
  display.textContent = "0";
};

const displayednum = (
  action,
  displayedNum,
  previousKeyType,
  keyContent,
  calculator,
  display
) => {
  if (!action) {
    if (displayedNum === "0" || previousKeyType === "operator") {
      if (isNumeric(keyContent)) {
        calculator.dataset.previousKeyType = undefined;
      }
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }
};

const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".calculator-display");
const keys = document.querySelector(".calculator-keys");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;

    const displayedNum = display.textContent;
    let previousKeyType = calculator.dataset.previousKeyType;
    console.log(previousKeyType);
    console.log(action);
    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );

    displayednum(
      action,
      displayedNum,
      previousKeyType,
      keyContent,
      calculator,
      display
    );

    if (action === "decimal") {
      display.textContent = displayedNum + ".";
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
      console.log("setting op");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }

    if (action === "clear") {
      console.log("clear key!");
      clear(display);
    }

    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);
    }
  }
});
