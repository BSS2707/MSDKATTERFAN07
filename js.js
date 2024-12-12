alert("WelCome To Msd Katter Fanfunction handleResize()
    {
    var width = window.innerWidth;

    // Check if the screen width is smaller than 768px
    if (width < 768) {
        // Apply custom styles or classes
        document.body.style.fontSize = '14px';
        document.querySelector('.logo').style.height = '300px';
        document.querySelector('.h-text').style.fontSize = '25px';
        document.querySelector('.text-footer').style.padding = '10px 0';
    } else {
        // Reset to original styles for larger screens
        document.body.style.fontSize = '16px';
        document.querySelector('.logo').style.height = '450px';
        document.querySelector('.h-text').style.fontSize = '30px';
        document.querySelector('.text-footer').style.padding = '20px 0';
    }
}

// Call the function when the page loads and on window resize
window.onload = handleResize;
window.onresize = handleResize;");