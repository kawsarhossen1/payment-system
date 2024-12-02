document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("pin-number-input");

    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }

    // wrong way to this process verify the pin
    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      const newBalance = balance + addMoney;

      document.getElementById("account-balance").innerText = newBalance;

      // add to transaction history

      const p = document.createElement("p");
      p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
      console.log(p);

      //   should be a common function
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Failed to add money.");
    }
  });
