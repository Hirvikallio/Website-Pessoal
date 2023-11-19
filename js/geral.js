/*  gradiente */
document.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth * 100;
    let y = e.clientY / window.innerHeight * 100;

    document.documentElement.style.setProperty('--x', x + 'vw');
    document.documentElement.style.setProperty('--y', y + 'vh');
});


// Select elements by class 'gradient'
const gradients = document.querySelectorAll('.gradient');

// Add event listeners to each gradient
gradients.forEach((gradient) => {
    gradient.addEventListener('mouseenter', () => {
        gradient.style.transform = 'scale(4)';
    });

    gradient.addEventListener('mouseleave', () => {
        gradient.style.transform = 'scale(1)';
    });
});

