let billAmountInput = document.getElementById("bill");
let tiPercentageInput = document.getElementById("tip");
let form = document.getElementById("calculate");
let total = document.querySelector("h2");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (billAmountInput.value.length > 0 && tiPercentageInput.value.length > 0) {
    getVlaues();
    return;
  }
  total.innerHTML = `Total: 0.00 `;
});

function getVlaues() {
  let sum = {
    billAmount: Number(billAmountInput.value),
    tiPercentage: Number(tiPercentageInput.value),
  };
  const firstStep = (sum.tiPercentage / 100) * sum.billAmount + sum.billAmount;
  total.innerHTML = `Total: ${firstStep} `;
  clearInputs();
}

function clearInputs() {
  billAmountInput.value = null;
  tiPercentageInput.value = null;
}
