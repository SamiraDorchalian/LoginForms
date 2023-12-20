const login = document.querySelector(".login");
const socialLogin = document.querySelector(".social-login");
const screenBackground = document.querySelector(".screen__background");

login.innerHTML = `
    <div class="login__field">
        <i class="login__icon fas fa-user"></i>
        <input type="text" class="login__input" placeholder="User name / Email" />
    </div>
    <div class="login__field">
        <i class="login__icon fas fa-lock"></i>
        <input type="password" class="login__input" placeholder="Password">
    </div>
    <button class="button login__submit">
        <span class="button__text">Log In Now</span>
        <i class="button__icon fas fa-chevron-right"></i>
    </button>
`;

socialLogin.innerHTML = `
    <h3>Login</h3>
    <div class="social-icons">
        <a href="#" class="social-login__icon fab fa-instagram"></a>
        <a href="#" class="social-login__icon fab fa-facebook"></a>
        <a href="#" class="social-login__icon fab fa-twitter"></a>
    </div>
`;

screenBackground.innerHTML = `
    <span class="screen__background__shape screen__background__shape1"></span>
`;
