export default function decorate(block) {
    block.classList.add('carousel');
    const slides = Array.from(block.children);
    slides.forEach((slide, index) => {
      slide.classList.add('carousel-slide');
      slide.dataset.index = index;
    });
  
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    prevButton.className = 'carousel-prev';
    nextButton.className = 'carousel-next';
    prevButton.textContent = '❮';
    nextButton.textContent = '❯';
  
    block.appendChild(prevButton);
    block.appendChild(nextButton);
  
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.dataset.index = index;
      if (index === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    });
    block.appendChild(dotsContainer);
  
    let currentIndex = 0;
    const updateCarousel = (index) => {
      slides.forEach((slide) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
      });
      dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => dot.classList.remove('active'));
      dotsContainer.querySelector(`[data-index="${index}"]`).classList.add('active');
    };
  
    prevButton.addEventListener('click', () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
      updateCarousel(currentIndex);
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
      updateCarousel(currentIndex);
    });
  
    dotsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('carousel-dot')) {
        currentIndex = parseInt(e.target.dataset.index, 10);
        updateCarousel(currentIndex);
      }
    });
  
    updateCarousel(currentIndex);
  }
  