export default function decorate(block) {
    // Default to 'align-left' if no alignment is specified
    const alignment = block.dataset.alignment || 'align-left';

    // Remove any existing alignment classes
    const alignmentClasses = ['align-left', 'align-center', 'align-right'];
    block.classList.remove(...alignmentClasses);

    // Add the selected alignment class to the block
    if (alignmentClasses.includes(alignment)) {
        block.classList.add(alignment);
    } else {
        block.classList.add('align-left'); // Fallback to 'align-left'
    }

    // Find the button-container
    const buttonContainer = block.querySelector('.button-container');
    if (buttonContainer) {
        // Ensure button-container inherits alignment
        buttonContainer.classList.remove(...alignmentClasses);
        buttonContainer.classList.add(alignment);
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
