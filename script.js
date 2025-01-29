const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const courseInput = document.getElementById("course");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const courseError = document.getElementById("courseError");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  // Email validation
  if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Phone validation
  if (phoneInput.value.trim() === "" || phoneInput.value.length < 10) {
    phoneError.style.display = "block";
    isValid = false;
  } else {
    phoneError.style.display = "none";
  }

  // Course validation
  if (courseInput.value === "") {
    courseError.style.display = "block";
    isValid = false;
  } else {
    courseError.style.display = "none";
  }

  // Redirect to success page if valid
  if (isValid) {
    window.location.href = "blog.html"; // Redirects to the success page
  }
});
