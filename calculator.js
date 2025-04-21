function calculateLoan() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;  // Monthly interest rate
    const time = parseFloat(document.getElementById('time').value) * 12;  // Loan term in months

    // Input validation check
    if (isNaN(amount) || amount <= 0 || isNaN(rate) || rate <= 0 || isNaN(time) || time <= 0) {
        alert("Please enter valid and positive numbers for all fields.");
        return false;
    }

    // Calculate monthly payment
    const monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -time));
    const totalPayment = monthlyPayment * time;

    // Display results
    document.getElementById('monthlyPayment').innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalPayment').innerHTML = `Total Payment: $${totalPayment.toFixed(2)}`;

    // Optional: Reset the form after calculation (if desired)
    document.getElementById('loanForm').reset();

    // Prevent form submission
    return false;
}
