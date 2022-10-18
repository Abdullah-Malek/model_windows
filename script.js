"use strict";

const model = document.querySelector(".model");

const btnClose = document.querySelector(".close-model");

const overlay = document.querySelector(".overlay");

const showBtns = document.querySelectorAll(".show-model");

const closeModel = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModel = function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener("click", openModel);
  //   console.log(showBtns[i].textContent);
}

btnClose.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", function (e) {
  //   console.log("Key Pressed");
  //   console.log(e.key);

  if (e.key === "Escape") {
    // console.log("Escape Key Pressed");
    if (!model.classList.contains("hidden")) {
      closeModel();
    }
  }
});
