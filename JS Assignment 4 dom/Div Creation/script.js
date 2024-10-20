function createDiv(width, height, text) {
    // Create a new div element
    const newDiv = document.createElement('div');

    // Set the width and height with "px" as the unit
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';

    // Set the text content of the div
    newDiv.textContent = text;

    // Append the new div to the #container element
    const container = document.getElementById('container');
    container.appendChild(newDiv);
}

// Do not change this code
Window.createDiv = createDiv(500,400,"hello");