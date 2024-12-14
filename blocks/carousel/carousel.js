export default function decorate(block) {
    // Add a class to the block
    block.classList.add('carousel');

    // Extract all items from the block
    const items = Array.from(block.children);
    items.forEach((item, index) => {
        item.classList.add('carousel-item');
        item.dataset.index = index;
    });

    // Create navigation buttons
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    prevButton.className = 'carousel-prev';
    nextButton.className = 'carousel-next';
    prevButton.textContent = '❮';
    nextButton.textContent = '❯';

    // Append navigation buttons to the block
    block.appendChild(prevButton);
    block.appendChild(nextButton);

    // Create dots navigation
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    items.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        dot.dataset.index = index;
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });
    block.appendChild(dotsContainer);

    // Initialize carousel state
    let currentIndex = 0;

    // Function to update the carousel
    const updateCarousel = (index) => {
        items.forEach(item => {
            item.style.transform = `translateX(-${index * 100}%)`;
        });
        dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => dot.classList.remove('active'));
        dotsContainer.querySelector(`[data-index="${index}"]`).classList.add('active');
    };

    // Add event listeners for navigation buttons
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel(currentIndex);
    });

    // Add event listeners for dots
    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('carousel-dot')) {
            currentIndex = parseInt(e.target.dataset.index, 10);
            updateCarousel(currentIndex);
        }
    });

    // Initialize the first slide
    updateCarousel(currentIndex);
}
