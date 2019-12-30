// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
console.log(storage);
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
const ui = new UI();

// Load weather
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.querySelector("#w-change-btn").addEventListener("click", e => {
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;

  weather.changeLocation(city, state);

  storage.setLocationData(city, state);

  // Call get Weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

// Get weather
function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
