// Question 1
const title = document.getElementById("title");
title.textContent = "Hello JavaScript";

// Question 2
const description = document.querySelector(".description");
description.textContent = "New Description";

// Question 3
const item = document.querySelectorAll(".item");
item.forEach((item) => {
    item.style.color = "green";
})

// Question 4
const message = document.querySelector("#message");
message.textContent = "Welcome to JavaScript!";

// Question 5
const container = document.querySelector("#container");
container.innerHTML = `<h2>My Website</h2> 
<p>Welcome to my website!</p>`;

// Question 6
const profileImage = document.querySelector("#profileImage");
profileImage.setAttribute("src", "new.jpg");
profileImage.setAttribute("alt", "New Image");

// Question 7
const btn = document.querySelector("#btn");
btn.classList.add("red");
btn.classList.remove("red");
btn.classList.toggle("red");

// Question 8
const heading = document.querySelector("#heading");
heading.style.color = "yellow";
heading.style.fontSize = "30px";
heading.style.backgroundColor = "black";

// Question 9
const productBtn = document.querySelector("#productBtn");
console.log(productBtn.dataset.id);

// Question 10
const pTag = document.createElement("p");
pTag.textContent = "This paragraph was created using JavaScript.";
const body = document.querySelector("body");
body.append(pTag);

// Question 11
const skills = document.querySelector("#skills");
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");
// li1.textContent = "HTML";
// li2.textContent = "CSS";
// li3.textContent = "JavaScript";
// skills.appendChild(li1);
// skills.appendChild(li2);
// skills.appendChild(li3);
// skills.append(li1, li2, li3);

// Advanced
let skillsArr = ["HTML", "CSS", "JavaScript"];
skillsArr.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skills.appendChild(li);
})

// Question 12
const techList = document.createElement("ul");
const li1 = document.createElement("li");
li1.textContent = "CSS";
const li2 = document.createElement("li");
li2.textContent = "JavaScript";
techList.append(li1, li2);
body.append(techList);
const li3 = document.createElement("li");
li3.textContent = "HTML";
const li4 = document.createElement("li");
li4.textContent = "React";
techList.prepend(li3);
techList.append(li4);

// Question 13
const stack = document.querySelector("#stack");
const css = document.createElement("li");
css.textContent = "CSS";
stack.insertBefore(css, stack.children[1]);

// Question 14
const techStack = document.querySelector("#techStack");
// techStack.removeChild(techStack.children[1]);
techStack.children[1].remove();

// Question 15
const button = document.querySelector("#button");
const clone = button.cloneNode(true);
body.append(clone);