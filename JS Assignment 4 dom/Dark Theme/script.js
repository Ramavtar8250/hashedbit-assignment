function swapTheme() {
    const appDiv = document.getElementById('app');
    const swapButton = document.getElementById('swap');

    // Toggle class on the app div between 'day' and 'night'
    if (appDiv.classList.contains('day')) {
        appDiv.classList.remove('day');
        appDiv.classList.add('night');
        
        // Change button class to 'button_night'
        swapButton.classList.remove('button_day');
        swapButton.classList.add('button_night');
    } else {
        appDiv.classList.remove('night');
        appDiv.classList.add('day');
        
        // Change button class back to 'button_day'
        swapButton.classList.remove('button_night');
        swapButton.classList.add('button_day');
    }
}