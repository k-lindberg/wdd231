import { items } from "../data/items.mjs";

const itemContainer = document.querySelector('#itemsection');

items.forEach(item => {
    const card = document.createElement('section');
    const title = document.createElement('h2');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const address = document.createElement('address');
    const desc = document.createElement('p');
    const button = document.createElement('button');

    title.textContent = item.name;

    img.classList.add("hover");
    img.src = item.image;
    img.alt = item.name;
    img.loading = "lazy";
    img.width = 300;
    img.height = 200;
    
    address.innerHTML = `${item.address.street}<br>${item.address.city}`;
    desc.textContent = item.description;
    button.textContent = "Learn More";

    figure.appendChild(img);
    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(desc);
    card.appendChild(button);

    itemContainer.appendChild(card);
});