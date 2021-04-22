class Weather {
    constructor(city) {
        this.apiKey = '6bdfa93fcd87ecb88c9419e3880fa20b';
        this.city = city;
        // this.state = state;
    }

    // Fetch weather from api
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    // Change Location
    changeLocation(city) {
        this.city = city;
        // this.state = state;
    }
}