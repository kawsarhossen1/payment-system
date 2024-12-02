// step set event handler
document
  .getElementById("login-button")
  .addEventListener("click", function (event) {
    // step 2 browser load houa off
    event.preventDefault();

    // step 3 get the phn number

    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
  });
