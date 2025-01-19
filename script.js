document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const questionContainer = document.getElementById("question-container");
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const hearts = document.getElementById("hearts");

    // Open the envelope and show the question
    envelope.addEventListener("click", () => {
        // Animate the envelope flap opening
        document.getElementById("envelope-flap").style.transform = "rotateX(-180deg)";
        setTimeout(() => {
            envelope.style.display = "none"; // Hide the envelope
            questionContainer.style.display = "block"; // Show the question card
        }, 1000); // Delay to sync with flap animation
    });

    // "Yes" button behavior
    yesButton.addEventListener("click", () => {
        questionContainer.style.display = "none"; // Hide the card
        hearts.classList.remove("hidden"); // Show beating heart
        hearts.innerHTML = "❤️ I am so grateeeeful! ❤️";
    });

    // "No" button behavior
    noButton.addEventListener("click", () => {
        // Move the "No" button to a random position
        const container = document.getElementById("container");
        const containerRect = container.getBoundingClientRect();
        const randomX = Math.random() * (containerRect.width - noButton.offsetWidth);
        const randomY = Math.random() * (containerRect.height - noButton.offsetHeight);

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
