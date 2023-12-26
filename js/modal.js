const openModal = document.getElementById("open_modal");
const openModal2 = document.getElementById("open_modal2");
const modal = document.getElementById("my_modal");
const closeModal = document.getElementById("modal__close");

openModal.addEventListener("click", () => {
  modal.classList.add("modal__show");
});

openModal2.addEventListener("click", () => {
  modal.classList.add("modal__show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("modal__show");
});
