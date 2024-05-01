const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue
  };

  console.log(formData);
  form.reset();
}

// button hover effect
const button = document.querySelector("button");
button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#6C8CFF';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '';
});

// input effects

const textInput = document.querySelector("input");
textInput.addEventListener("focus", () => {
  textInput.value = "Type area";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});

textInput.addEventListener('mouseover', () => {
  textInput.style.border = '1px solid #000';
});

textInput.addEventListener('mouseout', () => {
  textInput.style.border = '';
});