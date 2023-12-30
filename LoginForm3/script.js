const singup = document.querySelector(".singup");
const login = document.querySelector(".login");

const form = document.createElement("form");
singup.appendChild(form);

// form.innerHTML = `
//     <label for="chk" aria-hidden="true">Sing up</label>
//     <input type="text" name="text" placeholder="User name" required=""/>
//     <input type="email" name="email" placeholder="Email" required=""/>
//     <input type="password" name="password" placeholder="Password" required=""/>
//     <button>Sign up</button>
// `;

const singUpEl = document.createElement("label");
form.appendChild(singUpEl);
singUpEl.htmlFor = "chk";
singUpEl.ariaHidden = "true";
singUpEl.innerText = "Sing up";
const inputEl_1 = document.createElement("input");
form.appendChild(inputEl_1);
inputEl_1.type = "text";
inputEl_1.name = "text";
inputEl_1.placeholder = "User name";
inputEl_1.required = "";
const inputEl_2 = document.createElement("input");
form.appendChild(inputEl_2);
inputEl_2.type = "email";
inputEl_2.name = "email";
inputEl_2.placeholder = "Email";
inputEl_2.required = "";
const inputEl_3 = document.createElement("input");
form.appendChild(inputEl_3);
inputEl_3.type = "password";
inputEl_3.name = "password";
inputEl_3.placeholder = "Password";
inputEl_3.required = "";
const SignupButton = document.createElement("button");
SignupButton.innerText = "Sign up";
form.appendChild(SignupButton);

const formEl = document.createElement("form");
login.appendChild(formEl);

// formEl.innerHTML = `
//     <label for="chk" aria-hidden="true">Login</label>
//     <input type="email" name="email" placeholder="Email" required="" />
//     <input type="password" name="password" placeholder="Password" required=""/>
//     <button>Login</button>
// `;

const singUpEl_2 = document.createElement("label");
formEl.appendChild(singUpEl_2);
singUpEl_2.htmlFor = "chk";
singUpEl_2.ariaHidden = "true";
singUpEl_2.innerText = "Login";
const inputEl_4 = document.createElement("input");
formEl.appendChild(inputEl_4);
inputEl_4.type = "email";
inputEl_4.name = "email";
inputEl_4.placeholder = "Email";
inputEl_4.required = "";
const inputEl_5 = document.createElement("input");
formEl.appendChild(inputEl_5);
inputEl_5.type = "password";
inputEl_5.name = "password";
inputEl_5.placeholder = "Password";
inputEl_5.required = "";
const SignupButton_2 = document.createElement("button");
SignupButton_2.innerText = "Login";
formEl.appendChild(SignupButton_2);
