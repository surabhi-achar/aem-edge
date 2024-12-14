export default function decorate(block) {
    const items = block.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    const showItem = (index) => {
      items.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
      });
    };
  
    showItem(currentIndex);
  
    // Add navigation controls
    const prevButton = document.createElement('button');
    prevButton.textContent = '❮';
    prevButton.classList.add('carousel-prev');
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
      showItem(currentIndex);
    });
  
    const nextButton = document.createElement('button');
    nextButton.textContent = '❯';
    nextButton.classList.add('carousel-next');
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
      showItem(currentIndex);
    });
  
    block.appendChild(prevButton);
    block.appendChild(nextButton);
  }
  