import { beaches } from "../data/beaches.mjs";

function filterBeaches(region) {
    let filtered;

    if (region === "all") {
        filtered = beaches;
    } 
    else {
        filtered = beaches.filter(beach => beach.region === region);
    }

    renderBeaches(filtered);
}

function renderBeaches(list) {
    const container = document.querySelector("#beachList");
    container.innerHTML = "";

    list.forEach(beach => {
        const card = document.createElement("section");
        card.classList.add("card");

        const name = document.createElement("h3");
        name.textContent = beach.beachName;

        const description = document.createElement("p");
        description.textContent = beach.description;

        const amenities = document.createElement("p");
        amenities.innerHTML = `<strong>Amenities</strong>: ${beach.amenities}`;

        const image = document.createElement("img");

        image.setAttribute("src", beach.image);
        image.setAttribute("alt", beach.beachName);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", 75)
        image.setAttribute("height", 75)

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(amenities);

        container.appendChild(card);
    });
}

filterBeaches("all");

document.querySelectorAll("#filters button").forEach(btn => {
    btn.addEventListener("click", () => {
        const region = btn.dataset.filter;
        filterBeaches(region);
    });
});
