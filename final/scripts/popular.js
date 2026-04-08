import { popular } from "../data/popular.mjs";

function getRandomFour(array) {
    let result = [];
    let usedIndexes = new Set();

    while (result.length < 4) {
        let randomIndex = Math.floor(Math.random() * array.length);

        if (!usedIndexes.has(randomIndex)) {
            usedIndexes.add(randomIndex);
            result.push(array[randomIndex]);
        }
    }
    return result;
}

if (document.querySelector("#cardSection")) {
    createPopularCard(getRandomFour(popular));

    const homeLink = document.querySelector("#home");

    homeLink.addEventListener("click", () => {
        createPopularCard(getRandomFour(popular))
    });
}

function createPopularCard(places) {
    const container = document.querySelector("#cardSection");
    container.innerHTML = "";

    places.forEach(location => {
        const card = document.createElement("section");
        card.classList.add("card");

        const image = document.createElement("img");
        const place = document.createElement("h3");
        const description = document.createElement("p");
        const button = document.createElement("a");

        image.setAttribute("src", location.image);
        image.setAttribute("alt", location.place);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", 75)
        image.setAttribute("height", 75)

        place.textContent = location.place;
        description.textContent = location.description;

        button.href = location.link;
        button.textContent = location.buttonText;
        button.classList.add("card-btn");

        card.appendChild(image);
        card.appendChild(place);
        card.appendChild(description);
        card.appendChild(button);

        container.appendChild(card);
    });
}