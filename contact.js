function submitContactForm(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform validation if needed
    if (name && email && message) {
        // Hide the form
        document.getElementById('contactForm').style.display = 'none';

        // Show the thank you message
        document.getElementById('thankYouMessage').style.display = 'block';

        // Optional: Clear the form after submission
        document.getElementById('contactForm').reset();
    } else {
        // Alert user if form is incomplete
        alert("Please fill in all the fields!");
    }
}
