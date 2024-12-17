/**
 * Applies alignment to a block and its button container.
 * @param {Element} block - The block containing the buttons
 */
export default function decorate(block) {
    const alignment = block.dataset.alignment || 'align-left';
    
    const alignmentClasses = ['align-left', 'align-center', 'align-right'];


    block.classList.remove(...alignmentClasses);

    if (alignmentClasses.includes(alignment)) {
        block.classList.add(alignment);
    } else {
        block.classList.add('align-left'); 
    }


    const buttonContainer = block.querySelector('.button-container');
    if (buttonContainer) {
        buttonContainer.classList.remove(...alignmentClasses);
        buttonContainer.classList.add(alignment);
    }

    const buttons = block.querySelectorAll('.button-container');
    buttons.forEach(button => {
        button.classList.remove(...alignmentClasses);
        button.classList.add(alignment);
    });
}
