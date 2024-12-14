document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel__track');
    const items = Array.from(track.children);
    const prevButton = document.querySelector('.carousel__navigation--prev');
    const nextButton = document.querySelector('.carousel__navigation--next');
    let currentIndex = 0;
  
    const updateCarousel = () => {
      const itemWidth = items[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
      updateCarousel();
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    });
  
    updateCarousel();
  });
  