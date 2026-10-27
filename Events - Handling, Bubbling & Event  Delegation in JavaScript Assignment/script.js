// Question 1
const btn = document.querySelector("#btn");
const removeBtn = document.querySelector("#remove-btn");
const btnTxt = document.querySelector("#btn-txt");

btn.addEventListener("click", () => {
    btnTxt.textContent = "Button Clicked!";
})

removeBtn.addEventListener("click", () => {
    btnTxt.textContent = "";
})

// Question 2
const changeTextBtn = document.querySelector("#change-text-btn");
const changeText = document.querySelector("#change-text");

changeTextBtn.addEventListener("click", () => {
    if(changeText.textContent === "Welcome to my website!") {
        changeText.textContent = "Thanks for visiting!";
        return;
    }
    changeText.textContent = "Welcome to my website!";
})

// Question 3
const js = document.querySelector("#js");

js.addEventListener("mouseover", () => {
    js.textContent = "Mouse is over the heading!";
    js.style.backgroundColor = "yellow";
});

js.addEventListener("mouseleave", () => {
    js.textContent = "JavaScript";
    js.style.backgroundColor = "white";
});

// Question 4
btn.addEventListener("click", (e) => {
    console.log(e.target.tagName);
})

// Question 5
const mouseOver = document.querySelector("#mouse-over");

mouseOver.addEventListener("mouseover", (e) => {
    console.log({ x: e.x, y: e.y});
})

// Question 6
const inpt = document.querySelector("#inpt");

inpt.addEventListener("input", (e) => {
    const value = e.target.value;
    console.log("You typed:", value);
})

// Question 7
const removeEvent = document.querySelector("#remove-event");
const clicked = () => console.log("Button Clicked");

removeEvent.addEventListener("click", clicked);
removeEvent.removeEventListener("click", clicked);

// Question 8
const onceView = document.querySelector("#once-view");

onceView.addEventListener("click", () => {
    console.log("Welcome!");
}, { once: true });

// Question 9 & 10 & 11
document.querySelector("#child").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Button clicked");
})

document.querySelector("#parent").addEventListener("click", (e) => {
    console.log("Parent clicked");
}, { capture: true })

// Question 12
document.querySelector("#buttons").addEventListener("click", (e) => {
    if(e.target.id === "buttons") {
        return;
    }
    console.log(e.target.textContent);
})

// Question 13
document.querySelector("#skills").addEventListener("click", (e) => {
    if(e.target.id === "skills") {
        return;
    }
    console.log("You clicked:", e.target.textContent);
})