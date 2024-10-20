// Change text color based on user input

document.getElementById('colorchange').addEventListener('click', function() {
    const color = document.getElementById('colorbox').value;
    const textContainer = document.getElementById('text-container');
    textContainer.style.color = color;
});

// Change font size based on the range input
document.getElementById('fontsize').addEventListener('input', function() {
    const fontSize = document.getElementById('fontsize').value;
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontSize = fontSize + 'px';
});

// Toggle Italics style
document.getElementById('italic').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    if (textContainer.style.fontStyle === 'italic') {
        textContainer.style.fontStyle = 'normal';
    } else {
        textContainer.style.fontStyle = 'italic';
    }
});

// Toggle Underline style
document.getElementById('underline').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    if (textContainer.style.textDecoration === 'underline') {
        textContainer.style.textDecoration = 'none';
    } else {
        textContainer.style.textDecoration = 'underline';
    }
});

// Toggle Bold style
document.getElementById('bold').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    if (textContainer.style.fontWeight === 'bold') {
        textContainer.style.fontWeight = 'normal';
    } else {
        textContainer.style.fontWeight = 'bold';
    }
});

// Change font-family based on dropdown selection
document.getElementById('list').addEventListener('change', function() {
    const fontFamily = document.getElementById('list').value;
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontFamily = fontFamily;
});

// Get the current CSS properties of the text and display them
document.getElementById('getstyle').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    const cssProps = `
        Font-size: ${textContainer.style.fontSize} <br>
        Font-family: ${textContainer.style.fontFamily} <br>
        Color: ${textContainer.style.color} <br>
        Font-style: ${textContainer.style.fontStyle} <br>
        Text-decoration: ${textContainer.style.textDecoration} <br>
        Font-weight: ${textContainer.style.fontWeight}
    `;
    document.getElementById('css-props').innerHTML = cssProps;
});
