document.getElementById('current-year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel__control--prev');
    const nextButton = document.querySelector('.carousel__control--next');
    const wrapper = document.querySelector('.carousel__wrapper');
    let index = 0;

    function showSlide(n) {
        const slides = document.querySelectorAll('.carousel__item');
        if (n >= slides.length) index = 0;
        if (n < 0) index = slides.length - 1;
        wrapper.style.transform = `translateX(${-index * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        index++;
        showSlide(index);
    });

    prevButton.addEventListener('click', () => {
        index--;
        showSlide(index);
    });

    // Optional: Auto slide every 5 seconds
    setInterval(() => {
        index++;
        showSlide(index);
    }, 5000);
});