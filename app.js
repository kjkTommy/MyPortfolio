const btnResult = document.getElementById("btnResult");
const numberResult = document.getElementById("result");
const block = document.getElementById("block");
const fixedNum = 2;

import { add, sub, multi, div } from "./operations.js";

btnResult.addEventListener("click", function () {
  const firstNumber = Number(document.getElementById("frstNum").value);
  const secondNumber = Number(document.getElementById("scndNum").value);
  const operation = document.getElementById("select").value;
  const calc = (a, b, operation) => {
    let res;
    switch (operation) {
      case "plus":
        res = add(a, b);
        break;
      case "minus":
        res = sub(a, b);
        break;
      case "multi":
        res = multi(a, b);
        break;
      case "division":
        if (b === 0) {
          res = "Error";
        } else {
          res = div(a, b);
        }
        break;
      default:
        res = "Invalid data";
        break;
    }
    if (res % 1 === 0) {
      return res;
    }
    if (!isFinite(res)) {
      return (res = "Error");
    } else {
      return res.toFixed(fixedNum);
    }
  };
  numberResult.textContent = calc(firstNumber, secondNumber, operation);
});

const blockResults = document.getElementById("res-list");
btnResult.addEventListener("click", saveResult);

function saveResult() {
  const NumRes = document.createElement("p");
  NumRes.textContent = numberResult.textContent;
  NumRes.classList.add("oldResult");
  NumRes.addEventListener("click", removeElement);
  blockResults.insertAdjacentElement("afterbegin", NumRes);
}

const removeElement = (elem) => elem.target.remove();
