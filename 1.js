document.addEventListener('DOMContentLoaded', function() {
    // Get the audio element
    var audio = document.getElementById('coffee');

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

document.addEventListener("DOMContentLoaded", function() {
    var copyTextBtn = document.getElementById("copyDiscord");
    copyTextBtn.addEventListener("click", function() {
        // Text to be copied
        var textToCopy = "cscxdx";
        
        // Create a temporary textarea element to hold the text
        var tempTextArea = document.createElement("textarea");
        tempTextArea.value = textToCopy;
        document.body.appendChild(tempTextArea);
        
        // Select the text in the textarea
        tempTextArea.select();
        
        // Copy the selected text
        document.execCommand("copy");
        
        // Remove the temporary textarea
        document.body.removeChild(tempTextArea);
        
        // Alert the user that the text has been copied (optional)
        alert("Copied Discord!");
    });
});
