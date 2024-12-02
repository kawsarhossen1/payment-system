// add money to the account

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById("input-add-money").value;
    const pinNumberInput = document.getElementById("pin-number-input").value;
    console.log(addMoneyInput, pinNumberInput);
  });
