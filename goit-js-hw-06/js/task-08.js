const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Zapobiegamy domyślnemu zachowaniu formularza (np. odświeżaniu strony)

const emailInput = this.elements.email;
const passwordInput = this.elements.password;

if (emailInput.value === "" || passwordInput.value === "") {
    alert("Please fill in all fields.");
} else {
const formData = {
    email: emailInput.value,
    password: passwordInput.value,
    };

    console.log(formData);
    this.reset(); // Czyścimy wartości pól formularza
}
});