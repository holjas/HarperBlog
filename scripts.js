//modalOverlay
const modalOverlay = document.querySelector(".modalOverlay");
const closeModelBtn = document.querySelector(".closeModelBtn");
const body = document.querySelector("body");

//show modal after a short delay
// const showModal = window.setTimeout(() => {
//   modalOverlay.classList.add("modalVisible");
// }, 4000);

//close modal when 'x' button clicked
closeModelBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("modalVisible");
});
//close modal if it's open and user clicks outside the modal
body.addEventListener("click", function (e) {
  const targetClassList = e.target.classList;
  if (targetClassList[0] === "modalOverlay") {
    modalOverlay.classList.remove("modalVisible");
  }
});
//modalOverlay end
///////////////////////////////////////////////
//hamburgerToggle
const navToggle = document.querySelector(".navToggle");
const navSelection = document.querySelector(".navSelection");
const navBar = document.querySelector(".navBar");
const navUl = document.querySelector(".navBar>ul li");

navToggle.addEventListener("click", function () {
  navSelection.classList.toggle("navSelectionToggle");
});
