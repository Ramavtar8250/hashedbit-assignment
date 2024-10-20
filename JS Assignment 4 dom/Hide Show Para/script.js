function toggleVisibility() {
    const paragraph = document.getElementById('useless-paragraph');
    
    // Check if the paragraph is currently visible
    if (paragraph.style.display === 'none') {
        // If hidden, show the paragraph
        paragraph.style.display = 'block';
    } else {
        // If visible, hide the paragraph
        paragraph.style.display = 'none';
    }
}