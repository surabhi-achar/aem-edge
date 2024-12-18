export default function decorate(block) {
    const alignment = block.dataset.alignment || 'align-left';
    console.log('Alignment applied:', alignment);
  
    const alignmentClasses = ['align-left', 'align-center', 'align-right'];
    block.classList.remove(...alignmentClasses);
    block.classList.add(alignment);
  
    const buttonContainer = block.querySelector('.button-container');
    if (buttonContainer) {
      buttonContainer.classList.remove(...alignmentClasses);
      buttonContainer.classList.add(alignment);
    }
  }
  