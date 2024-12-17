export default function decorate(block) {
    const alignment = block.dataset.alignment || 'align-left'; // Default alignment class

    // Find the button-container
    const buttonContainer = block.querySelector('.button-container');
    if (buttonContainer) {
        buttonContainer.classList.add(alignment); // Add alignment class dynamically
    }

    // Apply button type classes
    const link = block.querySelector('a');
    if (link) {
        link.classList.add('button');
        if (link.parentElement.tagName === 'STRONG') {
            link.classList.add('primary'); // If inside <strong>, make it primary
        }
    }
}
