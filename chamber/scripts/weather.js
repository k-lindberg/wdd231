const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const desc = document.querySelector('#desc');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

const myKey = "f17a02108341cd56c8f48aab534ba0be"
const myLat = "40.31"
const myLong = "-112.01"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);
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

async function getForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            processForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    currentTemp.textContent = Math.round(data.main.temp);
    desc.textContent = data.weather[0].description;
    humidity.textContent = data.main.humidity;

    function convertTime(unix) {
        const date = new Date(unix * 1000);
        return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }

    sunrise.textContent = convertTime(data.sys.sunrise);
    sunset.textContent = convertTime(data.sys.sunset);
}

function processForecast(data) {
    const todayString = new Date().toDateString();

    const todayEntries = data.list.slice(0, 8);

    const temps = todayEntries.map(item => item.main.temp);

    let todayHigh = temps[0];
    let todayLow = temps[0];

    for (let i = 1; i < temps.length; i++) {
        if (temps[i] > todayHigh) {
            todayHigh = temps[i];
        }
        if (temps[i] < todayLow) {
            todayLow = temps[i]
        } 
    }

    high.textContent = Math.round(todayHigh);
    low.textContent = Math.round(todayLow);

    buildThreeDayForecast(data);
}

function buildThreeDayForecast(data) {
    const days = {};

    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' })

        if (!days[dayName]) {
            days[dayName] = [];
        }

        days[dayName].push(item.main.temp);
    })

    const dayNames = Object.keys(days).slice(0, 3);

    dayNames.forEach((day, index) => {
        const temps = days[day];

        let dayHigh = temps[0];
        for (let i = 1; i < temps.length; i++) {
            if (temps[i] > dayHigh) {
                dayHigh = temps[i];
            }
        }

        document.querySelector(`#day${index + 1}-name`).textContent = day;
        document.querySelector(`#day${index + 1}-temp`).textContent = Math.round(dayHigh);
    });
}

apiFetch();
getForecast();