const levelMap = {
    np: "Non-Profit",
    bronze: "Bronze",
    silver: "Silver",
    gold: "Gold"
};

const formInfo = new URLSearchParams(window.location.search);

const level = formInfo.get('level');
const capitalLevel = levelMap[level] || level;

document.querySelector('#form-results').innerHTML = `
<p>Confirmation for ${formInfo.get('first')} ${formInfo.get('last')}, ${formInfo.get('title')} at ${formInfo.get('business-name')}</p>
<p>Email: ${formInfo.get('email')}</p>
<p>Phone: ${formInfo.get('phone')}</p>
<p>Membership Level: ${capitalLevel}</p>
<p>Business/Organization Description: ${formInfo.get('description')}</p>
<p>Timestamp: ${formInfo.get('timestamp')}</p>
`