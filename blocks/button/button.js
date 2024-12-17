export default function decorate(block) {
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
}
