document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = document.getElementById("input-cash-out").value;
    const pinNumber = document.getElementById("cash-out-pin").value;

    if (pinNumber === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      const balanceNumber = parseFloat(balance);
      const cashOutNumber = parseFloat(cashOut);

      //   reduce  the balance

      const newBalance = balanceNumber - cashOutNumber;

      // update the balance

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to cash out. Please try again");
    }
  });
