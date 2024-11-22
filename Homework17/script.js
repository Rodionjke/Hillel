const dateElement = document.querySelector('.date');
const timeElement = document.querySelector('.time');
const cityElement = document.querySelector('#city');
const temperatureElement = document.querySelector('.temperature');
const humidityElement = document.querySelector('#humidity');
const feelsLikeElement = document.querySelector('#feels_like');
const windElement = document.querySelector('#wind');
const pressureElement = document.querySelector('#pressure');
const cloudStatusElement = document.querySelector('#cloud_status');
const refreshButton = document.querySelector('a');

function updateRequest() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=49.988358&lon=36.232845&appid=aea9d68aeb044e21b413c481a31e96d7")
        .then(response => response.json())
        .then(data => {
            dateElement.textContent = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`
            const hours = new Date().getHours().toString().padStart(2, '0');
            const minutes = new Date().getMinutes().toString().padStart(2, '0');
            timeElement.textContent = `${hours}:${minutes}`;
            const city = data.name;
            cityElement.textContent = `${city}`;
            const humidity = data.main.humidity;
            humidityElement.textContent = `Humidity: ${humidity}%`;
            const tempInKelvin = data.main.temp;
            const tempInCelsius = (tempInKelvin - 273.15).toFixed(1);
            temperatureElement.textContent = `${tempInCelsius}°С`;
            const feelsLike = data.main.feels_like;
            const feelsLikeInCelsius = (feelsLike - 273.15).toFixed(1);
            feelsLikeElement.textContent = `Feels like: ${feelsLikeInCelsius}°С`;
            const wind = data.wind.speed;
            windElement.textContent = `Wind: ${wind} km/h`;
            const cloudStatus = data.weather[0].description;
            cloudStatusElement.textContent = `${cloudStatus[0].toUpperCase()}${cloudStatus.slice(1)}`;
            const pressure = data.main.pressure;
            pressureElement.textContent = `Pressure: ${pressure} hPa`;
        })
}

updateRequest();
refreshButton.addEventListener("click", (event) => {
    event.preventDefault();
    updateRequest();
    refreshButton.classList.add('rotating');
    setTimeout(() => {
        refreshButton.classList.remove('rotating');
    }, 1000)
})