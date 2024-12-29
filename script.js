let currentIndex = 0;
const images = document.querySelectorAll('.banner-img');

function changeImage() {
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 3000);  // Change image every 3 seconds
changeImage();  // Initialize the first image




let year = document.querySelector("#year");

$(document).ready(function () {
  year.innerText = new Date().getFullYear();
});



