// Init Auth Service
const register_auth = new AuthService();
// Init Message Module
const register_message = new Message();
register_message.init();

// Register UI
const register_form = document.forms["signUpForm"];
const firstNameInput = register_form.elements["first_name"];
const lastNameInput = register_form.elements["last_name"];
const nickNameInput = register_form.elements["nick_name"];
const dayOfBirthInput = register_form.elements["day_of_birth"];
const monthOfBirthInput = register_form.elements["month_of_birth"];
const yearOfBirthInput = register_form.elements["year_of_birth"];
const countryInput = register_form.elements["country"];
const cityInput = register_form.elements["city"];
const genderInput = register_form.elements["gender"];
const registerEmailInput = register_form.elements["email"];
const phoneInput = register_form.elements["phone"];
const registerPasswordInput = register_form.elements["password"];

// Register handler
function registerSubmitHandler(e) {
    e.preventDefault();

    const validation = new Validation(register_form);
    validation.init();

    if (!validation.check()) return console.error("Validation error.");

    register_auth.register(firstNameInput.value, lastNameInput.value, nickNameInput.value, dayOfBirthInput.value, monthOfBirthInput.value, yearOfBirthInput.value, countryInput.value, cityInput.value, genderInput.value, registerEmailInput.value, phoneInput.value, registerPasswordInput.value)
        .then((res) => {
            if (!res.error) {
                // localStorage.setItem("social_user_id", res.id);
                // localStorage.setItem("social_user_token", res.token);
                window.location = "index.html";
            } else {
                register_message.show({ text: res.message, error: res.error });
            }
        });
}

register_form.addEventListener("submit", registerSubmitHandler);