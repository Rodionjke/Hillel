'use strict'
const prevArrow = document.querySelector('.arrow_prev');
const nextArrow = document.querySelector('.arrow_next');
const allPhotos = document.querySelectorAll('.photos');
const photosBlock = document.querySelector('.photos_block')

function checkArrowsForPhotos() {
    const activePhoto = document.querySelector('.photos.active');
    if (activePhoto === allPhotos[0]) {
        prevArrow.style.display = 'none'
    } else {
        prevArrow.style.display = 'flex'
    }
    if (activePhoto === allPhotos[allPhotos.length-1]) {
        nextArrow.style.display = 'none'
    } else {
        nextArrow.style.display = 'flex'
    }
}

function showNextPhoto() {
    const activePhoto = document.querySelector('.photos.active');
    const nextPhoto = activePhoto.nextElementSibling;
    if (nextPhoto) {
        activePhoto.classList.remove('active');
        nextPhoto.classList.add('active');
    }
    checkArrowsForPhotos()
}

function showPreviousPhoto() {
    const activePhoto = document.querySelector('.photos.active');
    const prevPhoto = activePhoto.previousElementSibling;

    if (prevPhoto) {
        activePhoto.classList.remove('active');
        prevPhoto.classList.add('active');
    }
    checkArrowsForPhotos()
}

allPhotos.forEach(function () {
    const navigationDots = document.createElement('img');
    navigationDots.classList.add('dots');
    navigationDots.src = 'images/dot-single.svg';
    photosBlock.appendChild(navigationDots);
});

const dots = document.querySelectorAll('.dots');

dots.forEach(function (dot, index) {
    dot.addEventListener('click', () => {
        const activePhoto = document.querySelector('.photos.active');
        if (activePhoto) {
            activePhoto.classList.remove('active');
        }
        allPhotos[index].classList.add('active');
        checkArrowsForPhotos();
    });
});

checkArrowsForPhotos()
nextArrow.addEventListener('click', showNextPhoto)
prevArrow.addEventListener('click', showPreviousPhoto)


