const buttons = document.querySelectorAll(".btn");
const input = document.querySelector(".inp input");

let expression = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.value;
    if (value === "ac") {
      expression = "";
      input.value = "";
    } else if (value === "del") {
      expression = expression.slice(0, -1);
      input.value = expression;
    } else if (value === "=") {
        try {
            if(/^[0-9+\-.*/%]+$/.test(expression)){
                let res = Function(`"use strict"; return (${expression})`)();
                expression = res.toString();
                input.value = expression;
            }else{
                expression = "";
                input.value = "Invalid";
            }
        } catch (error) {
            expression = "";
            input.value = "error";
        }
    } else {
      expression += value;
      input.value = expression;
    }
  });
});
