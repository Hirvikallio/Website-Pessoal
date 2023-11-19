/*  gradiente cursor 
document.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth * 100;
    let y = e.clientY / window.innerHeight * 100;

    document.documentElement.style.setProperty('--x', x + 'vw');
    document.documentElement.style.setProperty('--y', y + 'vh');
});   */
document.addEventListener('DOMContentLoaded', function () {
    // Select elements by class 'gradient'
    const gradients = document.querySelectorAll('.gradient');
    const textContainer = document.querySelector('.text-container');

    // Add event listeners to each gradient
    gradients.forEach((gradient) => {
        gradient.addEventListener('mouseenter', () => {
            gradient.style.transform = 'scale(4)';
            // Change text color on hover
            textContainer.style.color = getTextColor(gradient.id);
        });

        gradient.addEventListener('mouseleave', () => {
            gradient.style.transform = 'scale(1)';
            // Reset text color on mouse leave
            textContainer.style.color = '';
        });
    });

    // Function to get text color based on gradient ID
    function getTextColor(gradientId) {
        switch (gradientId) {
            case 'hoverGradient':
                return '#ff214f'; // Set the desired text color for this gradient
            case 'hoverGradient1':
                return 'rgb(1, 38, 248)'; // Set the desired text color for this gradient
            // Add more cases for additional gradients if needed
            default:
                return '';
        }
    }
});


/* gradiente grande background  */
document.addEventListener('mousemove', (event) => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
    mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

    document.querySelector('body').style.background =
        'radial-gradient(at ' +
        mouseXpercentage +
        '% ' +
        mouseYpercentage +
        '%, #d9d9d9, #8b8b8b, #444444, #000000)';
});

