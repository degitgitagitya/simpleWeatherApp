class Weather {
  constructor(city, state) {
    this.apiKey = "69f1c188d5dd50ab3def56bacc087e81";
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather Location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
