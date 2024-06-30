document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
  
    // Simple validation for demonstration
    if (email === '' || password === '') {
      errorMessage.textContent = 'Email and password are required.';
      return;
    }
  
    // Simulating form submission - Replace with actual backend logic
    // For demonstration, just log the entered email and password
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Clear error message if there were no errors
    errorMessage.textContent = '';
  
    // Redirect to another page or perform further actions after successful sign-in
    // For demonstration, let's redirect to a success page
    window.location.href = 'success.html';
  });
  