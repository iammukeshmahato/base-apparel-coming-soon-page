let inputEmail = document.getElementById("email");
// let submitBtn = document.getElementById("submitBtn");

document.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateEmail(inputEmail.value)) {
        document.body.innerHTML = "Thank You!!!"
    } else {
        inputEmail.style = `background-image: url("./images/icon-error.svg");`;
        document.querySelector(".error-text").style = `display: block;`;
    }
})


function validateEmail(email) {
    const emailEq = /^[a-zA-Z]([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
    if (emailEq.test(email))
        return true;
    else return false;
}