window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
    var x = event.beta;  // In degrees in the range [-180,180]
    var y = event.gamma; // In degrees in the range [-90,90]

    // Adjust these values according to your device's orientation sensitivity
    if (x > 30 || x < -30 || y > 30 || y < -30) {
        playWhipSound();
    }
}

function playWhipSound() {
    var whipSound = document.getElementById('whipSound');
    whipSound.play();
}
