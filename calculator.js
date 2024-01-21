const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator-keys");

keys.addEventListener("click", (s) => {
  if (s.target.matches("button")) {
    console.log(s.target.innerText);
  }
});
