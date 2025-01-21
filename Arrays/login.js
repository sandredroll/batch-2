document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Here, you can add your login functionality, for now, let's just log the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Phone Number:", phone);
  
    alert("Login Successful");
  });
  
  // Handling Social Media Login
  document.querySelector('.google').addEventListener('click', function() {
    alert("Google Login clicked");
  });
  
  document.querySelector('.facebook').addEventListener('click', function() {
    alert("Facebook Login clicked");
  });
  
  document.querySelector('.twitter').addEventListener('click', function() {
    alert("Twitter Login clicked");
  });
  