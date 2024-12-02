// step set event handler
document
  .getElementById("login-button")
  .addEventListener("click", function (event) {
    // step 2 browser load houa off
    event.preventDefault();

    // step 3 get the phn number and the pin number

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    console.log(phoneNumber, pinNumber);

    // validate phone and pin
    // this is not current way to check
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("you are logged in");
      window.location.href = '/home.html';

      //   allow user to use the website
    } else {
      alert("Wrong phone number or pin");
    }
  });
