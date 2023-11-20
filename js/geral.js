/*  gradiente cursor 
document.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth * 100;
    let y = e.clientY / window.innerHeight * 100;

    document.documentElement.style.setProperty('--x', x + 'vw');
    document.documentElement.style.setProperty('--y', y + 'vh');
});   */


document.addEventListener('DOMContentLoaded', function () {

    const gradients = document.querySelectorAll('.gradient');
    const textContainer = document.querySelector('.text-container');
    const image = document.querySelector('.portfolio_img');

    gradients.forEach((gradient) => {
        gradient.addEventListener('mouseenter', () => {
            gradient.style.transform = 'scale(4)';
            textContainer.style.color = getTextColor(gradient.id);

            if (gradient.id === 'hoverGradient') {
                image.style.transform = 'scale(2)';
            }
        });

        gradient.addEventListener('mouseleave', () => {
            gradient.style.transform = 'scale(1)';
            image.style.transform = 'scale(1)';
            textContainer.style.color = '';
        });
    });

    /* mudar cor do texto */
    function getTextColor(gradientId) {
        switch (gradientId) {
            case 'hoverGradient':
                return '#ff214f'; // Pink 
            case 'hoverGradient1':
                return 'rgb(1, 38, 248)'; // Blue 
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


