const visitsDisplay = document.querySelector("#visits");

const now = Date.now();

let lastVisit = Number(localStorage.getItem("lastVisit")) || 0;

if (lastVisit === 0) {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {

    const msInDay = 86400000;
    const daysBetween = Math.floor((now - lastVisit) / msInDay);

    if (daysBetween < 1) {
        visitsDisplay.textContent = "Back so soon? Awesome!";
    } else if (daysBetween === 1) {
        visitsDisplay.textContent = "You last visited 1 day ago.";
    } else {
        visitsDisplay.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);