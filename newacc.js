document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Perform form validation here
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    
    // Example validation: Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    
    // Additional validation and form submission logic can be added here
    
    // If everything is validated, you can submit the form using AJAX or redirect to another page
    alert("Form submitted successfully!");
});
