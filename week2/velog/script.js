// const dropdownButton = document.querySelector(".dropdown-button");
// const dropdownBox = document.querySelector(".dropdown-box");
// let isDropdownOpen = false;

// dropdownButton.addEventListener("click", function () {
//   console.log(isDropdownOpen);
//   if (isDropdownOpen === false) {
//     dropdownBox.classList.remove("hidden");
//     isDropdownOpen = true;
//   } else {
//     dropdownBox.classList.add("hidden");
//     isDropdownOpen = false;
//   }
// });

const dropdownButton = document.querySelector(".dropdown-button");
const dropBox = document.querySelector(".dropdown-box");
const boxList = document.querySelectorAll(".box-list");
console.log(boxList);
let onOff = false;
dropdownButton.addEventListener("click", function () {
  if (onOff === false) {
    dropBox.classList.remove("hidden");
    onOff = true;
  } else {
    dropBox.classList.add("hidden");
    onOff = false;
  }
});

boxList.forEach((item) => {
  item.addEventListener("click", function (e) {
    dropdownButton.innerText = e.target.innerText;
  });
});
