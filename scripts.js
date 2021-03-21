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
//close modal if user clicks outside of the modal when it's open
body.addEventListener("click", function () {
  console.log("clicked outside the modal");
});
