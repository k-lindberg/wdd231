const valueName = {
    dole: "Dole Plantation",
    dolphin: "Dolphin and You Tour",
    fishing: "Honolulu Bottom Fishing Adventure",
    jurassic: "Jurassic Valley Adventure Tour",
    temple: "Laie Hawaiʻi Temple Visitors’ Center",
    pearl: "Pearl Harbor USS Arizona Memorial",
    pcc: "Polynesian Cultural Center",
    snorkel: "Waikīkī Snorkeling & Ocean Waterpark Adventure"
};

const formInfo = new URLSearchParams(window.location.search);

const activities = formInfo.getAll("activity");

const activityList = activities.map(item => `<li>${valueName[item]}</li>`).join("");

document.querySelector('#form-results').innerHTML = `
    <p>Thank you for submitting the form, ${formInfo.get('first')} ${formInfo.get('last')}.</p>
    <p>Please watch for an email at ${formInfo.get('email')}</p>

    <p>You selected: </p>
    <ul>
        ${activityList}
    </ul>
`;