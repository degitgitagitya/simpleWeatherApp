class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.desc = document.querySelector("#w-desc");
    this.string = document.querySelector("#w-string");
    this.detail = document.querySelector("#w-detail");
    this.icon = document.querySelector("#w-icon");
    this.humidity = document.querySelector("#w-humidity");
    this.feelsLike = document.querySelector("#w-feels-like");
    this.wind = document.querySelector("#w-wind");
  }

  paint(weather) {
    console.log(weather);

    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.main.temp;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Relative Feels Like: ${weather.main.feels_like}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
  }
}
