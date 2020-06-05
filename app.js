
// init classes
const ui = new UI();
const local = new Local();

// get storagelocation Date
const localWeatherData = local.getLocationData();

// init weather class
const weather = new Weather(localWeatherData.city, localWeatherData.state);

// on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err))
}

// chamge location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const newCity = document.getElementById('city').value;
    const newState = document.getElementById('state').value;

    // Change Location
    weather.changeLocation(newCity, newState);

    // set to loval storaghe
    local.setLocationData(newCity, newState)

    // get and display weather
    getWeather();

    // close modal and clear fields
    $('#local-modal').modal('hide');
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';    
});