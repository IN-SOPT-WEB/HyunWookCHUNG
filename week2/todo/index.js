// const todayInput = document.querySelector("#input-today");
// const todayTodoList = document.querySelector("#list-today");
// const todayTodoAddButton = document.querySelector("#add-today");

// const tomorrowInput = document.querySelector("#input-tomorrow");
// const tomorrowTodoList = document.querySelector("#list-tomorrow");
// const tomorrowTodoAddButton = document.querySelector("#add-tomorrow");

// const viewTodayButton = document.querySelector("#view-today");
// const viewTomorrowButton = document.querySelector("#view-tomorrow");
// const viewTogetherButton = document.querySelector("#view-together");

// const leftSection = document.querySelector(".left");
// const rightSection = document.querySelector(".right");

// let id = 0;

// function initTodo() {
//   todayTodoAddButton.addEventListener("click", function () {
//     addTodo(todayInput.value, todayTodoList);
//   });
//   todayInput.addEventListener("keypress", function (e) {
//     console.log(todayInput);
//     return e.key === "Enter" ? addTodo(todayInput.value, todayTodoList) : null;
//   });
//   tomorrowTodoAddButton.addEventListener("click", function () {
//     addTodo(tomorrowInput.value, tomorrowTodoList);
//   });
//   tomorrowInput.addEventListener("keypress", function (e) {
//     return e.key === "Enter"
//       ? addTodo(tomorrowInput.value, tomorrowTodoList)
//       : null;
//   });
//   viewTodayButton.addEventListener("click", function () {
//     controlSection("view-today");
//   });
//   viewTomorrowButton.addEventListener("click", function () {
//     controlSection("view-tomorrow");
//   });
//   viewTogetherButton.addEventListener("click", function () {
//     controlSection("view-together");
//   });
// }

// initTodo();

// function removeTodo(targetNode) {
//   todayTodoList.removeChild(targetNode);
// }

// function controlSection(buttonName) {
//   if (buttonName === "view-today") {
//     leftSection.classList.remove("hidden");
//     rightSection.classList.add("hidden");
//   } else if (buttonName === "view-tomorrow") {
//     rightSection.classList.remove("hidden");
//     leftSection.classList.add("hidden");
//   } else {
//     rightSection.classList.remove("hidden");
//     leftSection.classList.remove("hidden");
//   }
// }

// function addTodo(todoText, date) {
//   if (!todoText) {
//     return alert("???????????? ???????????????");
//   }
//   // ------------ ???????????? ????????? ???????????? ------------- //
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   const button = document.createElement("button");
//   const i = document.createElement("i"); // <i class="fa-regular fa-trash-can"></i>
//   // ------------ ???????????? ????????? ???????????? ------------- //

//   // ----------- ????????? ???????????? ?????? ?????? --------- //
//   i.setAttribute("class", "fa-regular fa-trash-can"); // i ????????? ????????? ?????? ????????? ??????????????? ???????????????

//   span.innerText = todoText; // span ?????? input??? ?????? ??? ??????
//   // ----------- ????????? ???????????? ?????? ?????? --------- //

//   // ---------- ????????? ???????????? ?????? list??? ?????? ------------ //
//   li.appendChild(span);
//   li.appendChild(button);
//   li.setAttribute("id", id++);
//   button.appendChild(i);

//   date.appendChild(li);
//   // tomorrowTodoList.appendChild(li);
//   // ---------- ????????? ???????????? ?????? list??? ?????? ------------ //

//   // ----------- ???????????? ??? ????????? ------------ //
//   todo.value = "";

//   button.addEventListener("click", function (e) {
//     removeTodo(e.target.parentNode);
//   });
// }

// ????????? ???????????? document ?????? js ??? ???????????? ?????? ?????? ??????//

const todayInputBox = document.querySelector("#input-today");
const todayButton = document.querySelector("#add-today");
const todayList = document.querySelector("#list-today");

//

todayButton.addEventListener("click", function () {
  const newElement = document.createElement("li");
  todayList.appendChild(newElement);
  newElement.innerText = todayInputBox.value;
  todayInputBox.value = "";

  const todayDelete = document.createElement("button");
  newElement.appendChild(todayDelete);
  todayDelete.addEventListener("click", function () {
    newElement.remove();
  });
});

const inputTomorrow = document.querySelector("#input-tomorrow");
const tomorrowButton = document.querySelector("#add-tomorrow");
const tomorrowList = document.querySelector("#list-tomorrow");

tomorrowButton.addEventListener("click", function () {
  const tomorrowLi = document.createElement("li");
  tomorrowList.appendChild(tomorrowLi);
  tomorrowLi.innerText = inputTomorrow.value;
  inputTomorrow.value = "";

  const tomorrowDelete = document.createElement("button");
  tomorrowLi.appendChild(tomorrowDelete);
  tomorrowDelete.addEventListener("click", function () {
    tomorrowLi.remove();
  });
});
// ????????? ????????? ???????????? ??? ??????-//

const viewToday = document.querySelector("#view-today");
const viewTomorrow = document.querySelector("#view-tomorrow");
const viewTogether = document.querySelector("#view-together");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

viewToday.addEventListener("click", function () {
  right.classList.add("hidden");
  left.classList.remove("hidden");
});

viewTomorrow.addEventListener("click", function () {
  left.classList.add("hidden");
  right.classList.remove("hidden");
});

viewTogether.addEventListener("click", function () {
  left.classList.remove("hidden");
  right.classList.remove("hidden");
});
