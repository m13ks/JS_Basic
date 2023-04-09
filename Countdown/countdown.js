const countdownDate = new Date("May 9, 2023 00:00:00").getTime();

const xTime = setInterval(function() {

    const now = new Date().getTime();
    const xTimeLeft = countdownDate - now;

    const hours = Math.floor(xTimeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((xTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((xTimeLeft % (1000 * 60)) / 1000);

    const xTimeDisplay = document.getElementById("countdown");
    xTimeDisplay.innerHTML = hours + " г " + minutes + " х " + seconds + " с";

    if (xTimeLeft < 0) {
        clearInterval(xTime);
        xTimeDisplay.innerHTML = "НА, НАХУЙ!";
    }
}, 1000);