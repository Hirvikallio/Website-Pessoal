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
      '%, #3498db, #2ecc71, #e74c3c, #f39c12, #8e44ad)';
});
