const container = document.querySelector(".conatiner");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");
const loginForm = document.getElementById("loginForm");

let loginUsername = document.getElementById("loginusername");
let loginPassword = document.getElementById("loginpassword");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

let reginame = document.getElementById("reginame");
let regiemail = document.getElementById("regiemail");
let regipass = document.getElementById("regipass");
let subregi = document.getElementById("subregi");
let loginbtnfinal = document.getElementById("loginbtnfinal");

let reginames = [];
let regiemails = [];
let regipassword = [];

subregi.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (reginame.value && regiemail.value && regipass.value) {
        reginames.push(reginame.value);
        regiemails.push(regiemail.value);
        regipassword.push(regipass.value);
        alert("Registered successfully!");
        
        reginame.value = "";
        regiemail.value = "";
        regipass.value = "";

        console.log("Registered Users:");
        console.log("Names:", reginames);
        console.log("Emails:", regiemails);
        console.log("Passwords:", regipassword);
    } else {
        alert("Please fill in all registration fields.");
    }
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const enteredUsername = loginUsername.value;
    const enteredPassword = loginPassword.value;
    const userIndex = reginames.indexOf(enteredUsername);

    if (userIndex !== -1 && regipassword[userIndex] === enteredPassword) {
        alert("Login Successful!");
        window.location.replace("index.html");
    } else {
        alert("Invalid username or password. Please try again.");
    }
});