
const galleryImages = document.querySelectorAll(".gallery");

const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modalImage");
const closeModal = document.querySelector("#closeModal");

galleryImages.forEach((image) => {

  image.addEventListener("click", () => {

    modal.showModal();

    modalImage.src = image.src;
    modalImage.alt = image.alt;

  });

});

closeModal.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {

  const dialogDimensions = modal.getBoundingClientRect();

  if (
    event.clientX < dialogDimensions.left ||
    event.clientX > dialogDimensions.right ||
    event.clientY < dialogDimensions.top ||
    event.clientY > dialogDimensions.bottom
  ) {
    modal.close();
  }

});