const today = new Date();

const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastmodified");

const fullDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

lastModified.innerHTML = `${fullDate}`

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const popular = [
    { 
        place: "Sunset Beach",
        image: "images/sunset.webp",
        description: "One of the longest rideable surf spots",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Kawela Bay/Turtle Bay",
        image: "images/turtle-bay.webp",
        description: "Great place to snorkel",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Kuaola Regional Park",
        image: "images/kualoa.webp",
        description: "Spectacular views down the east coast of Oʻahu",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Makapuʻu Beach Park",
        image: "images/makapuu.webp",
        description: "Very popular with bodyborders and bodysurfers",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Waikīkī Beach",
        image: "images/waikiki.webp",
        description: "One of the best places to learn how to surf",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Magic Island Lagoon",
        image: "images/magic-island.webp",
        description: "Perfect place for keiki (children) to swim",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Mākaha Beach",
        image: "images/makaha.webp",
        description: "Best surfing on Oʻahu’s west coast",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Kō Olina Resort and Marina",
        image: "images/koolina.webp",
        description: "Man-made lagoons, perfect for families",
        link: "beaches.html",
        buttonText: "View Beaches"
    },
    {
        place: "Jurassic Valley Adventure Tour",
        image: "images/jurassic2.webp",
        description: "Tour the Jurassic World movie sets",
        link: "activities.html",
        buttonText: "View Activities"
    },
    {
        place: "Polynesian Cultural Center",
        image: "images/pcc2.webp",
        description: "Immerse yourself in six Pacific Island cultures",
        link: "activities.html",
        buttonText: "View Activities"
    },
    {
        place: "Laie Hawaiʻi Temple Visitors’ Center",
        image: "images/laie-temple2.webp",
        description: "Enjoy the lush gardens and learn about Jesus Christ",
        link: "activities.html",
        buttonText: "View Activities"
    },
    {
        place: "Dole Plantation",
        image: "images/dole-plantation2.webp",
        description: "Enjoy the \"Pineapple Experience\"",
        link: "activities.html",
        buttonText: "View Activities"
    }
]

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

const beaches = [ 
    {
        region: "north",
        beachName: "Kawela Bay / Turtle Bay",
        description: "Is located on Oʻahu’s northeastern tip, past Haleʻiwa and near Kahuku. It’s protected from large waves and surf, making it a great place to snorkel. You might even catch a glimpse of a honu (Hawaiian green sea turtle)",
        image: "images/turtle-bay.webp"
    },
    {
        region: "west",
        beachName: "Kō Olina Resort and Marina",
        description: "Is where you’ll find man-made lagoons created for the Kō Olina Resort, home to the J.W.Marriott Ihilani Resort & Spa and the Aulani, A Disney Resort & Spa. With parking, restrooms, and showers available, this is a perfect beach for families.",
        image: "images/koolina.webp"
    },
    {
        region: "east",
        beachName: "Kuaola Regional Park",
        description: "Is across from Kuaola Ranch. This beautiful beach park offers spectacular views down the east coast of Oʻahu as well as Mokoliʻi, an islet off the Windward Coast.",
        image: "images/kualoa.webp"
    },
    {
        region: "south",
        beachName: "Magic Island Lagoon",
        description: "Extends out from Ala Moana Regional Park beach, a manmade peninsula with large seawalls and a shallow lagoon, making it a perfect place for keiki (children) to swim.",
        image: "images/magic-island.webp"
    },
    {
        region: "west",
        beachName: "Mākaha Beach",
        description: "Has the best surfing on Oʻahu’s west coast and is one of the places where big wave surfing was pioneered. Beware of the sloping sand beachhead that can cause backwash and catch unsuspecting visitors off-guard.",
        image: "images/makaha.webp"
    },
    {
        region: "east",
        beachName: "Makapuʻu Beach Park",
        description: "Is sea cliffs and is very popular with bodyboarders and bodysurfers alike. Around the corner is the Makapuʻu Lighthouse.",
        image: "images/makapuu.webp"
    },
    {
        region: "north",
        beachName: "Sunset Beach",
        description: "Spans from ʻEhukai Beach (Banzai Pipeline) to Sunset Point, encompassing a dozen different reef breaks. This two-mile stretch of sand is considered one of the longest rideable surf spots in the world, and it’s also a venue for the Vans Triple Crown of Surfing (November - December).",
        image: "images/sunset.webp"
    },
    {
        region: "south",
        beachName: "Waikīkī Beach",
        description: "Is one of the most popular beaches in the world, boasting more than four million visitors every year and breathtaking views of Lēʻahi (Diamond Head).The Duke Kahanamoku statue welcomes you to Waikīkī, one of the best places in Hawaiʻi to learn how to surf or paddle a canoe thanks to its small but long-lasting wave break. Waikīkī is actually made up of a few beaches, including Fort DeRussy Beach to the west, Waikīkī Beach (fronting the Royal Hawaiian Hotel and Westin Moana Surfrider), Kūhiō Beach (along Kalākaua Avenue), and Queen Surf Beach, home to quieter stretches on the Lēʻahi Head side of Waikīkī.",
        image: "images/waikiki.webp"
    }
    
]

function filterBeaches(region) {
    let filtered = region === "all"
        ? beaches
        : beaches.filter(beach => beach.region === region);
    
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

        const image = document.createElement("img");
        
        image.setAttribute("src", beach.image);
        image.setAttribute("alt", beach.beachName);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", 75)
        image.setAttribute("height", 75)

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
    
        container.appendChild(card);
    });
} 

if (document.querySelector("#beachList")) {
    filterBeaches("all");

    document.querySelectorAll("#filters button").forEach(btn => {
        btn.addEventListener("click", () => {
            const region = btn.dataset.filter;
            filterBeaches(region);
        });
    });
}

if (document.querySelector("form")) {

    const form = document.querySelector("form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = document.querySelector("#username").value;
        const email = document.querySelector("#email").value;

        const activities = Array.from(
            document.querySelectorAll("input[name='activity']:checked")).map(box => box.value);
        
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userActivities", JSON.stringify(activities));

        alert("Thank you for your request! Please watch your inbox for more info!");
    });
}