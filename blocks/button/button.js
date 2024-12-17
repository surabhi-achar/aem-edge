export default function decorate(block) {
    const alignment = block.dataset.alignment || 'align-left'; // Get alignment from dataset
    const linkType = block.dataset.linktype || ''; // Get button type

    const link = block.querySelector('a');
    if (link) {
        link.classList.add('button'); // Add base button class
        if (linkType) {
            link.classList.add(linkType); // Add button type (primary/secondary)
        }

        // Add alignment class to parent container
        const container = link.parentElement;
        if (container) {
            container.classList.add('button-container', alignment);
        }
    }
}
