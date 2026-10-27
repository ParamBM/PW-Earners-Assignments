// Question 1 & 2
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted successfully!");
    const name = document.querySelector("#name").value;
    console.log("You entered:", name);
});

// Question 4
const skillList = document.querySelector("#skills");
skillList.addEventListener("change", (e) => {
    if(e.target.value) {
        console.log("Selected Language:", e.target.value);
    }
})

// Question 5
const inputName = document.querySelector("#input-name");

inputName.addEventListener("focus", (e) => {
    inputName.style.outlineColor = "red";
})

// Question 6
inputName.addEventListener("blur", (e) => {
    console.log("You left the input field.");
})

// Question 7 & 8 & 9 & 10
const form2 = document.querySelector("#form2");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    // if(username.value.trim().length === 0) {
    //     console.log("Name is required.");
    //     return;
    // }

    const nameValue = username.value;
    if(!nameValue) {
        console.log("Name is required.");
        return;
    }

    if(!email.value) {
        console.log("Email is required.");
        return;
    }

    if(password.value.length < 6) {
        console.log("Password must be at least 6 characters.");
        return;
    }

    console.log("Form submitted 🎉");
})