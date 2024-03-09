document.addEventListener('DOMContentLoaded', function() {
    // Get the audio element
    var audio = document.getElementById('firefly');

    // Set the volume (between 0 and 1)
    audio.volume = 0.25; // Adjust this value as needed

    // Function to play the audio
    function playAudio() {
        // Check if the audio is paused or not
        if (audio.paused) {
            // Play the audio
            audio.play();
        } else {
            // If already playing, do nothing
            return;
        }
    }

    // Add an event listener for user interaction (click)
    document.addEventListener('click', function() {
        // Play the audio when user interacts with the website
        playAudio();
    });
});
