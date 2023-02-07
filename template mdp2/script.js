const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const password = loginForm.password.value;
    // esenonuxlsarrelersneseurerstntuerturerilradereesuxesesdeueot
    if (password === "test") {
        alert("You have successfully logged in.");
        window.location.href = "next.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

document.addEventListener("keydown", function (event) {

    if (event.ctrlKey) {

        event.preventDefault();

    }

    if (event.keyCode == 123) {

        event.preventDefault();

    }

});

document.addEventListener('contextmenu',
    event => event.preventDefault()
);