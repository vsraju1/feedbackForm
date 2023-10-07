let feedback = document.querySelectorAll("span");
const beforeResult = document.querySelector(".after-result");
const afterResult = document.querySelector(".result");
const btn = document.querySelector("button");
let heading = document.getElementById("heading");
console.log(heading.innerHTML);

feedback = Array.from(feedback);
feedback.forEach((element) => {
  element.addEventListener("click", (e) => {
    let given_feedback = e.target.id;
    console.log(given_feedback);
    btn.addEventListener("click", () => {
      if (given_feedback !== "") {
        beforeResult.style.display = "none";
        afterResult.style.display = "unset";
        let gettingResult = document.querySelector(".set-result");
        gettingResult.innerHTML = given_feedback;
        gettingResult.style.fontWeight = "bold"
      }
    });
  });
});
