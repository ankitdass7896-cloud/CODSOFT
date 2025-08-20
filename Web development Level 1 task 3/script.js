const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      display.innerText = "0";
      return;
    }

    if (value === "=") {
      try {
        const output = eval(currentInput);
        display.innerText = output;
        currentInput = output.toString();
        resultDisplayed = true;
      } catch {
        display.innerText = "Error";
        currentInput = "";
      }
      return;
    }

    if (resultDisplayed && !isNaN(value)) {
      currentInput = value;
      resultDisplayed = false;
    } else {
      currentInput += value;
    }

    display.innerText = currentInput;
  });
});
