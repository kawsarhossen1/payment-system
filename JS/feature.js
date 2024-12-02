// show the cash out form

document
  .getElementById("show-cash-out-btn")
  .addEventListener("click", function () {
    // show cash out button

    document.getElementById("cash-out-form").classList.remove("hidden");

    // hide the add money form

    document.getElementById("add-money-form").classList.add("hidden");
  });

// show add money form and hide the cash out form

document
  .getElementById("show-add-money-btn")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");

    document.getElementById("cash-out-form").classList.add("hidden");
  });
