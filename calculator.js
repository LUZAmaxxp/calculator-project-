const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator-keys");

keys.addEventListener("click", (s) => {
  if (s.target.matches("button")) {
    console.log(s.target.innerText);
  }
  const key = s.target;
  const action = key.dataset.action;

  if (!action) {
    console.log("number key!");
  } else if (
    action == "add" ||
    action == "substract" ||
    action == "multiply" ||
    action == "divide"
  ) {
    console.log("operator key!");
  }
  if (action == "decimal") console.log("decimal key!");
  if (action == "clear") console.log("clear key!");
  if (action == "calculate") console.log("calculate!");
});
const display = document.querySelector(".calculator-display");

keys.addEventListener("click", (s) => {
  if (s.target.matches("button")) {
    const key = s.target;
    const action = key.dataset.action;
    const keycontent = key.textContent;
    const displayNum = display.textContent;
    if (!action) {
      if (displayNum == "0") {
        display.textContent = keycontent;
      } else {
        display.textContent = displayNum + keycontent;
      }
      if (action == "decimal") {
        display.textContent = displayNum + ".";
      }
    }
  }
});
