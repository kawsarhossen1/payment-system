// add money to the account

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // get money and pin number
    const addMoneyInput = document.getElementById("input-add-money").value;
    const pinNumberInput = document.getElementById("pin-number-input").value;
    // console.log(addMoneyInput, pinNumberInput);

    // not right way
    if (pinNumberInput === "1234") {
      //  add money to the account
      const balance = document.getElementById("account-balance").innerText;
      const addNewNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);

      //   new balance
      const newBalance = addNewNumber + balanceNumber;

      // update current balance
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money! Please try again.");
    }
  });
