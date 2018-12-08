let loan_amount, interest, year, monthly_payment, total_payment, total_interest

document.querySelector("#loan-submit").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".spinner").style.display = "block";
  document.querySelector("#result").style.display = "none";
  setTimeout(calculate, 3000);
});

document.querySelector("#clear").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector("#amount").value = "";
  document.querySelector("#interest").value = "";
  document.querySelector("#year").value = "";
  document.querySelector("#result").style.display = "none";
  document.querySelector(".spinner").style.display = "none";
});

function calculate() {
  loan_amount = document.querySelector("#amount");
  interest = document.querySelector("#interest");
  year = document.querySelector("#year");
  monthly_payment = document.querySelector("#monthly_payment");
  total_payment = document.querySelector("#total_payment");
  total_interest = document.querySelector("#total_interest");

  let principal = parseFloat(loan_amount.value);
  let calculatedInterest = parseFloat(interest.value) / 100 / 12;
  let calculatedPayments = parseFloat(year.value) * 12;

  // Compute monthly payment
  let x = Math.pow(1 + calculatedInterest, calculatedPayments);
  let monthly = (principal * x * calculatedInterest) / (x - 1);

  if(isFinite(monthly)) {
    monthly_payment.value = monthly.toFixed(2);
    total_payment.value = (monthly * calculatedPayments).toFixed(2);
    total_interest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

    document.querySelector("#result").style.display = "block";
  } else {
    showError('Please check your numbers');
  }
  document.querySelector(".spinner").style.display = "none";

}

function showError(message) {
  document.querySelector("#result").style.display = "none";

  let loan_form = document.querySelector("#loan_form");
  let warning = document.createElement('div');
  warning.className = 'alert alert-danger';
  warning.appendChild(document.createTextNode(message));

  loan_form.insertBefore(warning, loan_form.firstChild);
  setTimeout(clearAlert, 3000);
}

function clearAlert() {
  document.querySelector(".alert").remove();
}
