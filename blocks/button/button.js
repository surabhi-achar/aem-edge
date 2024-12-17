export default function decorate(block) {
    const alignment = block.dataset.alignment || 'align-left'; // Default alignment: Left
    block.classList.add(alignment);

    const linkType = block.dataset.linktype || '';
    const link = block.querySelector('a');
    if (linkType) {
        link.classList.add(linkType);
    }
}
