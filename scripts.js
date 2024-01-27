document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const items = document.querySelectorAll('.carousel-item');

    let currentIndex = 0;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Initial slide display
    showSlide(currentIndex);
});
