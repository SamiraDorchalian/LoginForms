const singup = document.querySelector(".singup");
const login = document.querySelector(".login");

const form = document.createElement("form");
form.innerHTML = `
    <label for="chk" aria-hidden="true">Sing up</label>
    <input type="text" name="text" placeholder="User name" required=""/>
    <input type="email" name="email" placeholder="Email" required=""/>
    <input type="password" name="password" placeholder="Password" required=""/>
    <button>Sign up</button>
`;
singup.appendChild(form);

const formEl = document.createElement("form");
formEl.innerHTML = `
    <label for="chk" aria-hidden="true">Login</label>
    <input type="email" name="email" placeholder="Email" required="" />
    <input type="password" name="password" placeholder="Password" required=""/>
    <button>Login</button>
`;
login.appendChild(formEl);
