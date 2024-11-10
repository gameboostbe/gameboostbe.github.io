// Променливи за слайдове и индикатори
let currentIndex = 0;

// Функция за смяна на слайдове
function changeSlide(direction) {
    const sliders = document.querySelectorAll('.ad-slider');
    
    sliders.forEach((slider) => {
        const slides = slider.querySelectorAll('.ad-slide');
        const dots = slider.querySelectorAll('.dot');
        
        currentIndex += direction;
        
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        } else if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            dots[index].classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
                dots[index].classList.add('active');
            }
        });
    });
}

// Функция за добавяне на индикатори
function addDots(slider) {
    const dotsContainer = slider.querySelector('.dots-container');
    const slides = slider.querySelectorAll('.ad-slide');
    
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.onclick = function () {
            currentIndex = index;
            changeSlide(0);
        };
        dotsContainer.appendChild(dot);
    });
}

// Добавяне на индикатори за всички слайдъри
document.querySelectorAll('.ad-slider').forEach(addDots);

// Инициализация
changeSlide(0);
