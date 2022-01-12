const camdenTxt = document.querySelector(".camden");
const kimTxt = document.querySelector(".kim");

// buttons
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

// Answers
const ans1 = "Yes"
const ans2 = "No, she's hot!"

btn1.addEventListener("click", () => {
    camdenTxt.innerHTML = ans1;
})

btn2.addEventListener("click", () => {
    kimTxt.innerHTML = ans2;
})