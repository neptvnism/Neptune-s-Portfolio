document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('a-scene');
    const muteButton = document.getElementById('muteButton');
    const unmuteButton = document.getElementById('unmuteButton');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Ensure the music plays initially
    backgroundMusic.play().catch(() => {
        console.log('Play was prevented. User interaction is required.');
    });

    // Initial Visibility of the buttong to mute
    unmuteButton.style.display = 'none';
    muteButton.style.display = 'inline';

    // volume of music 
    backgroundMusic.volume = 0.5;

    // Mute Button Click
    muteButton.addEventListener('click', () => {
        backgroundMusic.pause();
        muteButton.style.display = 'none';
        unmuteButton.style.display = 'inline';
    });

    // Unmute Button Click
    unmuteButton.addEventListener('click', () => {
        backgroundMusic.play().catch(() => {
            console.log('Play was prevented. User interaction is required.');
        });
        muteButton.style.display = 'inline';
        unmuteButton.style.display = 'none';
    });

    // Star Generation Logic for the background 
    function generateStar() {
        const star = document.createElement('a-sphere');
        star.setAttribute('color', 'white');
        star.setAttribute('radius', '0.05');

        const posX = (Math.random() - 0.5) * 50;
        const posY = (Math.random() - 0.5) * 50;
        const posZ = (Math.random() - 0.5) * 50;

        star.setAttribute('position', `${posX} ${posY} ${posZ}`);
        scene.appendChild(star);
    }

    function generateStars() {
        for (let i = 0; i < 100; i++) {
            generateStar();
        }
    }

    // Call generateStars every 2 seconds
    const intervalId = setInterval(generateStars, 2000);

    // Stop generating stars after 15 seconds (too many!)
    setTimeout(() => {
        clearInterval(intervalId);
    }, 15000);
});
