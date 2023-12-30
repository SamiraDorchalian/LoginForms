const login = document.querySelector(".login");
const socialLogin = document.querySelector(".social-login");
const screenBackground = document.querySelector(".screen__background");

// login.innerHTML = `
//     <div class="login__field">
//         <i class="login__icon fas fa-user"></i>
//         <input type="text" class="login__input" placeholder="User name / Email" />
//     </div>
//     <div class="login__field">
//         <i class="login__icon fas fa-lock"></i>
//         <input type="password" class="login__input" placeholder="Password">
//     </div>
//     <button class="button login__submit">
//         <span class="button__text">Log In Now</span>
//         <i class="button__icon fas fa-chevron-right"></i>
//     </button>
// `;

const login__field_1 = document.createElement("div");
login.appendChild(login__field_1);
login__field_1.classList = "login__field";
const login__icon_fas_faUser = document.createElement("i");
login__icon_fas_faUser.classList = "login__icon fas fa-user";
login__field_1.appendChild(login__icon_fas_faUser);
const login__input_1 = document.createElement("input");
login__input_1.classList = "login__input";
login__input_1.type = "text";
login__input_1.placeholder = "User name / Email";
login__field_1.appendChild(login__input_1);

const login__field_2 = document.createElement("div");
login.appendChild(login__field_2);
login__field_2.classList = "login__field";
const login__icon_fas_fa_lock = document.createElement("i");
login__icon_fas_fa_lock.classList = "login__icon fas fa-lock";
login__field_2.appendChild(login__icon_fas_fa_lock);
const login__input_2 = document.createElement("input");
login__input_2.classList = "login__input";
login__input_2.type = "password";
login__input_2.placeholder = "Password";
login__field_2.appendChild(login__input_2);

const button_login__submit = document.createElement("button");
button_login__submit.classList = "button login__submit";
login.appendChild(button_login__submit);
const button__text = document.createElement("span");
button__text.classList = "button__text";
button__text.innerText = "Log In Now";
button_login__submit.appendChild(button__text);
const button__icon_fas_fa_chevron_right = document.createElement("i");
button__icon_fas_fa_chevron_right.classList =
  "button__icon fas fa-chevron-right";
button_login__submit.appendChild(button__icon_fas_fa_chevron_right);

// socialLogin.innerHTML = `
//     <h3>Login</h3>
//     <div class="social-icons">
//         <a href="#" class="social-login__icon fab fa-instagram"></a>
//         <a href="#" class="social-login__icon fab fa-facebook"></a>
//         <a href="#" class="social-login__icon fab fa-twitter"></a>
//     </div>
// `;
const h3_tag = document.createElement("h3");
h3_tag.innerText = "Login";
socialLogin.appendChild(h3_tag);
const socialIcons = document.createElement("div");
socialIcons.classList = "social-icons";
socialIcons.innerHTML = `
    <a href="#" class="social-login__icon fab fa-instagram"></a>
    <a href="#" class="social-login__icon fab fa-facebook"></a>
    <a href="#" class="social-login__icon fab fa-twitter"></a>
`;
socialLogin.appendChild(socialIcons);

// screenBackground.innerHTML = `
//     <span class="screen__background__shape screen__background__shape1"></span>
// `;
const screen__background__shape_screen__background__shape1 =
  document.createElement("span");
screen__background__shape_screen__background__shape1.classList =
  "screen__background__shape screen__background__shape1";
screenBackground.appendChild(
  screen__background__shape_screen__background__shape1
);
