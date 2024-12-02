// document
//   .getElementById("cash-out-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     const cashOut = document.getElementById("input-cash-out").value;
//     const pinNumber = document.getElementById("cash-out-pin").value;

//     if (pinNumber === "1234") {
//       const balance = document.getElementById("account-balance").innerText;
//       const balanceNumber = parseFloat(balance);
//       const cashOutNumber = parseFloat(cashOut);

//       //   reduce  the balance

//       const newBalance = balanceNumber - cashOutNumber;

//       // update the balance

//       document.getElementById("account-balance").innerText = newBalance;
//     } else {
//       alert("Failed to cash out. Please try again");
//     }
//   });

document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById("input-cash-out");
    const pinNumber = getInputFieldValueById("cash-out-pin");

    if (isNaN(cashOut)) {
      alert("Failed to cash out");
      return;
    }

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");

      if (cashOut > balance) {
        alert("You do not have enough money to cash out");
        return;
      }
      const newBalance = balance - cashOut;
      document.getElementById("account-balance").innerText = newBalance;

      //   add to transaction history
      const div = document.createElement("div");
      div.classList.add("bg-gray-300");
      div.innerHTML = `
        <h4 class = "text-2xl font-bold py-3">Cash Out</h4>
        <p>${cashOut} Withdraw. New Balance ${newBalance}</p>
        `;

      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("Failed to cash out. Please try again");
    }
  });
