const modalOverlay = document.querySelector(".modalOverlay");
const closeModelBtn = document.querySelector(".closeModelBtn");
const body = document.querySelector("body");

//show modal after a short delay
const showModal = window.setTimeout(() => {
  modalOverlay.classList.add("modalVisible");
}, 0.2);

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
