const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#desc');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

const myKey = "f17a02108341cd56c8f48aab534ba0be"
const myLat = "21.65"
const myLong = "-157.92"

const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); 
            displayResults(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function toTitleCase(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    weatherIcon.setAttribute('width', 75)
    weatherIcon.setAttribute('height', 75)
    currentTemp.textContent = Math.round(data.main.temp);
    captionDesc.textContent = toTitleCase(data.weather[0].description);
    humidity.textContent = data.main.humidity;
    wind.textContent = Math.round(data.wind.speed);

    function convertTime(unix) {
        const date = new Date(unix * 1000);
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            timeZone: 'Pacific/Honolulu'
        });
    }

    sunrise.textContent = convertTime(data.sys.sunrise);
    sunset.textContent = convertTime(data.sys.sunset);
}

apiFetch();