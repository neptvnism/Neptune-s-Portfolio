document.addEventListener('DOMContentLoaded', () => {
  const scene = document.querySelector('a-scene');

  function generateStar() {
    const star = document.createElement('a-sphere');
    star.setAttribute('color', 'white');
    star.setAttribute('radius', '0.05');

    // Random positions avoiding the text area
    const posX = (Math.random() - 0.5) * 50;
    const posY = (Math.random() - 0.5) * 50;
    const posZ = (Math.random() - 0.5) * 50;

    star.setAttribute('position', `${posX} ${posY} ${posZ}`);

    // Add star to the scene
    scene.appendChild(star);
  }

  function generateStars() {
    for (let i = 0; i < 100; i++) {
      generateStar();
    }
  }

  // Call generateStars every 2 seconds
  const intervalId = setInterval(generateStars, 2000);

  // Stop generating stars after 15 seconds
  setTimeout(() => {
    clearInterval(intervalId);
  }, 15000);
});
