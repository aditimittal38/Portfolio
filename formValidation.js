document.getElementById("contactForm").addEventListener("submit", function(event) {
  let valid = true;
  
  document.querySelectorAll(".error").forEach(el => {
    el.textContent = "";
    el.style.display = "none"; // Ensure the error is hidden before validation
  });

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  
  if (name === "") {
      let nameError = document.getElementById("nameError");
      nameError.textContent = "Name is required";
      nameError.style.display = "block";  // Make the error visible
      valid = false;
  }
  
  if (email === "") {
      let emailError = document.getElementById("emailError");
      emailError.textContent = "Email is required";
      emailError.style.display = "block";  // Make the error visible
      valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      let emailError = document.getElementById("emailError");
      emailError.textContent = "Invalid email format";
      emailError.style.display = "block";  // Make the error visible
      valid = false;
  }
  
  if (message === "") {
      let messageError = document.getElementById("messageError");
      messageError.textContent = "Message cannot be empty";
      messageError.style.display = "block";  // Make the error visible
      valid = false;
  }

  if (!valid) event.preventDefault(); // Prevent form submission if validation fails
});
