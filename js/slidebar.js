//============================== SLIDE BAR ==============================//
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0; 
let slideInterval;

function updateSlider(index) {
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateSlider(currentIndex);
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlider(currentIndex);
}


function startAutoPlay() {
    slideInterval = setInterval(nextSlide, 5000); 
}

function stopAutoPlay() {
    clearInterval(slideInterval);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoPlay();
    startAutoPlay();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoPlay();
    startAutoPlay();
});


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
        stopAutoPlay();
        startAutoPlay();
    });
});

startAutoPlay();