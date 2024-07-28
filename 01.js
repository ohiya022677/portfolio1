let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    
    // スライドの範囲を制限
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    // スライドを移動
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// 初期スライドを表示
showSlide(slideIndex);
