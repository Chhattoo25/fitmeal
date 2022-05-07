document.querySelector("form").addEventListener("submit", paymentFunction);

function paymentFunction(e) {
  e.preventDefault();
  var cc = document.getElementById("cc").value;
  var cvv = document.getElementById("cvv").value;

  if (cc.length == 16 && cvv.length == 3) {
    alert("Enter Otp = 7575");
    document.querySelector(".otpIn").style.display = "flex";
  }

  if (!(cc.length == 16 && cvv.length == 3)) {
    alert("Incorrect Details");
  }
}

document.getElementById("otpSubmit").addEventListener("click", otpFunction);

function otpFunction(e) {
  e.preventDefault();

  var valid = document.getElementById("oneTmPs").value;
  if (valid == 7575) {
    alert("Payment Successful");
    alert("Thank You");

    window.location.href = "fitmeals.html";
  } else {
    alert("Invalid Otp");
  }
}
document.getElementById("otpSubmit").addEventListener("click", function () {
  window.location.href = "../index.html";
});