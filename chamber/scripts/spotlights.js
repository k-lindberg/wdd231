const spotlightURL = 'https://raw.githubusercontent.com/k-lindberg/wdd231/main/chamber/data/members.json';

const spotlightContainer = document.querySelector('#spotlights');

const levels = {
    1: "Member",
    2: "Silver",
    3: "Gold"
};

const displaySpotlights = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        card.classList.add("spotlight-card");
        let logo = document.createElement('img');
        let name = document.createElement('h3')
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let membership = document.createElement('p');
        let website = document.createElement('a')

        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo for ${member.company_name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '75');

        name.textContent = member.company_name;
        address.innerHTML = `${member.address.street}<br>${member.address.city_state}`;
        phoneNumber.textContent = member.phone_number;
        membership.textContent = `Membership: ${levels[member.membership_level]}`;

        website.href = member.website;
        website.textContent = member.website;
        website.target = "_blank";

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(membership);
        card.appendChild(website);

        spotlightContainer.appendChild(card);
    });
}

async function loadSpotlights() {
    const response = await fetch(spotlightURL);
    const data = await response.json();
    
    const qualified = data.businesses.filter(b => b.membership_level >= 2);

    const spotlightCount = 3;

    const shuffled = qualified.sort(() => 0.5 - Math.random());

    const selected = shuffled.slice(0, spotlightCount);
    
    displaySpotlights(selected);
}

loadSpotlights();