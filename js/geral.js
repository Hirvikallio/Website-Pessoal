/*  gradiente cursor 
document.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth * 100;
    let y = e.clientY / window.innerHeight * 100;

    document.documentElement.style.setProperty('--x', x + 'vw');
    document.documentElement.style.setProperty('--y', y + 'vh');
});   */

/* gradientes background */
// Select elements by class 'gradient'
const gradients = document.querySelectorAll('.gradient');

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

// Add event listeners to each gradient
gradients.forEach((gradient) => {
    gradient.addEventListener('mouseenter', () => {
        gradient.style.transform = 'scale(4)';
    });

    gradient.addEventListener('mouseleave', () => {
        gradient.style.transform = 'scale(1)';
    });
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
        '%, #C3D6E5, #91F0F4, #59BAEC, #CE9CFF, #E3D4FB)';
});

