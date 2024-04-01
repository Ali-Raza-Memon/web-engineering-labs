document.addEventListener("DOMContentLoaded", function() {
    const addBallBtn = document.getElementById("addBallBtn");
    const ballContainer = document.getElementById("ballContainer");

    addBallBtn.addEventListener("click", function() {
        const ball = document.createElement("div");
        ball.classList.add("ball");

        // Set random position for the ball
        const maxX = ballContainer.clientWidth - 50; // Adjusted for ball size
        const maxY = ballContainer.clientHeight - 50; // Adjusted for ball size
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        ball.style.left = randomX + "px";
        ball.style.top = randomY + "px";

        ballContainer.appendChild(ball);
    });
});
