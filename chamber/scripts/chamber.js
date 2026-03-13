const url = 'https://raw.githubusercontent.com/k-lindberg/wdd231/main/chamber/data/members.json';

const cards = document.querySelector('#cards');

const displayBusiness = (businesses) => {
    businesses.forEach((business) => {
        let card = document.createElement('section');
        card.classList.add("business-card");
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let website = document.createElement('a')

        logo.setAttribute('src', business.image);
        logo.setAttribute('alt', `Logo for ${business.company_name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', '100');

        address.textContent = `${business.address.street}, ${business.address.city_state}`;
        phoneNumber.textContent = business.phone_number;

        website.href = business.website;
        website.textContent = business.website;
        website.target = "_blank";

        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phoneNumber);
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