// add money to the account

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById("input-add-money").value;
    const pinNumberInput = document.getElementById("pin-number-input").value;
    console.log(addMoneyInput, pinNumberInput);

    // not right way
    if (pinNumberInput === "1234") {
      console.log("Adding money to your account");

      //   get the current balance
      const balance = document.getElementById("account-balance").innerText;
      const addNewNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = addNewNumber + balanceNumber;
      console.log(newBalance);

        // update current balance
      document.getElementById('account-balance').innerText = newBalance;
    } else {
      alert("Failed to add money! Please try again.");
    }
  });
