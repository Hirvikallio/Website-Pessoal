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
                return 'rgb(253, 64, 96)'; // rosa
            case 'hoverGradient1':
                return 'rgb(51, 221, 255)'; // azul 
         case 'hoverGradient2':
                    return  'rgb(178, 87, 253)';  // roxo
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
        '%, #c6c6c6, #919191,#303030, #000000)';
});



/* animação circulo */

const circleSvg = document.getElementById('circle-svg');
const portfolioImage = document.querySelector('.portfolio_png');
const behanceImage = document.querySelector('.behance_png');
const behanceText = document.querySelector('.behance-text');
const portfolioText = document.querySelector('.portfolio-text');
const linkedinImage = document.querySelector('.linkedin_png');
const linkedinText = document.querySelector('.linkedin-text');

let mouseX = 0;
let mouseY = 0;

portfolioImage.addEventListener('mouseenter', () => {
    // Show the Portfolio text and SVG on Portfolio image hover
    portfolioText.style.display = 'block';
    circleSvg.style.display = 'block';

    // Hide the Behance text on Portfolio image hover
    behanceText.style.display = 'none';
    linkedinText.style.display= 'none';
});

portfolioImage.addEventListener('mouseleave', () => {
    // Hide the Portfolio text and SVG on Portfolio image mouseout
    portfolioText.style.display = 'none';
    circleSvg.style.display = 'none';
});

behanceImage.addEventListener('mouseenter', () => {
    // Show the Behance text and SVG on Behance image hover
    behanceText.style.display = 'block';
    circleSvg.style.display = 'block';

    // Hide the Portfolio text on Behance image hover
    portfolioText.style.display = 'none';
    linkedinText.style.display= 'none';
});

behanceImage.addEventListener('mouseleave', () => {
    // Hide the Behance text and SVG on Behance image mouseout
    behanceText.style.display = 'none';
    circleSvg.style.display = 'none';
});


linkedinImage.addEventListener('mouseenter', () => {
    // Show the Behance text and SVG on Behance image hover
    linkedinText.style.display = 'block';
    circleSvg.style.display = 'block';

    // Hide the Portfolio text on Behance image hover
    portfolioText.style.display = 'none';
    behanceText.style.display = 'none';
});

linkedinImage.addEventListener('mouseleave', () => {
    // Hide the Behance text and SVG on Behance image mouseout
    linkedinText.style.display = 'none';
    circleSvg.style.display = 'none';
});


window.addEventListener('mousemove', (event) => {
    // Update mouse coordinates
    mouseY = (event.clientY / 16) - (45 / 10) + 'rem';
    mouseX = (event.clientX / 16) - (45 / 10) + 'rem';

    // Update SVG position
    circleSvg.style.top = mouseY;
    circleSvg.style.left = mouseX;
});

// Optional: Hide the SVG initially
circleSvg.style.display = 'none';


