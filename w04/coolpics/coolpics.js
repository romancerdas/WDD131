
const menuButton = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', toggleMenu);


function toggleMenu() {

    if (navMenu.classList.contains('show')) {

        navMenu.classList.remove('show');

    } else {

        navMenu.classList.add('show');
    }
}

const imageContainer = document.querySelector('#img-container');
const modal = document.querySelector('.viewer');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');


imageContainer.addEventListener('click', openModal);


function openModal(event) {

    const clickedImage = event.target;

    if (clickedImage.tagName !== 'IMG') {
        return;
    }

    modalImage.src = clickedImage.src;
    modalImage.alt = clickedImage.alt;

    modal.showModal();
}


closeButton.addEventListener('click', closeModal);

function closeModal() {
    modal.close();
}

modal.addEventListener('click', function(event) {

    if (event.target === modal) {
        modal.close();
    }
});