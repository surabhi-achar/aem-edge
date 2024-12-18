
export default function decorate(block) {
    const alignment = block.dataset.alignment || 'align-left';
    const alignmentClasses = ['align-left', 'align-center', 'align-right'];
  
    // Remove existing alignment classes
    block.classList.remove(...alignmentClasses);
    block.classList.add(alignment);
  
    // Update button container alignment
    const buttonContainer = block.querySelector('.button-container');
    if (buttonContainer) {
      buttonContainer.classList.remove(...alignmentClasses);
      buttonContainer.classList.add(alignment);
    } else {
      console.warn('Button container not found!');
    }
  }
  
