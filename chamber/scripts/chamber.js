const url = 'https://raw.githubusercontent.com/k-lindberg/wdd231/main/chamber/data/members.json';

const cards = document.querySelector('#cards');

const levels = {
    1: "Member",
    2: "Silver",
    3: "Gold"
};

const displayBusiness = (businesses) => {
    businesses.forEach((business) => {
        let card = document.createElement('section');
        card.classList.add("business-card");
        let logo = document.createElement('img');
        let name = document.createElement('h2')
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let membership = document.createElement('p');
        let website = document.createElement('a')

        logo.setAttribute('src', business.image);
        logo.setAttribute('alt', `Logo for ${business.company_name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '75');

        name.textContent = business.company_name;
        address.innerHTML = `${business.address.street}<br>${business.address.city_state}`;
        phoneNumber.textContent = business.phone_number;
        membership.textContent = `Membership: ${levels[business.membership_level]}`;

        website.href = business.website;
        website.textContent = business.website;
        website.target = "_blank";

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(membership);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusiness(data.businesses);
}

getBusinessData();

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const cardsContainer = document.querySelector("#cards");

cardsContainer.classList.add("grid");
gridButton.classList.add("current");

gridButton.addEventListener("click", () => {
    cardsContainer.classList.add("grid");
    cardsContainer.classList.remove("list");

    gridButton.classList.add("current");
    listButton.classList.remove("current");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cardsContainer.classList.remove("grid");

    listButton.classList.add("current");
    gridButton.classList.remove("current");
});
