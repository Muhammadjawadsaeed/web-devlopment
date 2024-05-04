const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
    carouselItems.forEach(item => {
        item.style.display = 'none';
    });
    carouselItems[index].style.display ='block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

function startAutoSlide() {
    // Display the first slide initially
    showSlide(currentIndex);
    // Start automatic slideshow after 5 seconds
    setInterval(nextSlide, 3000);
}

document.addEventListener('DOMContentLoaded', startAutoSlide);
