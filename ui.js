class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(data, name) {
        this.location.textContent = data.name[0].query;
        this.desc.textContent = data.current.weatherDesc[0].value;
        this.string.textContent = `${data.current.temp_C}*C (${data.current.temp_F}*F)`
        this.icon.setAttribute('src', data.current.weatherIconUrl[0].value);
        this.humidity.textContent = `Relative Humidity: ${data.current.humidity}%`;
        this.dewpoint.textContent = `Visibility: ${data.current.visibility}kmtrs`;
        this.feelsLike.textContent = `FeelsLike: ${data.current.FeelsLikeC}*C (${data.current.FeelsLikeF}*F)`;
        this.wind.textContent = `Wind from ${data.current.winddir16Point} at ${data.current.windspeedMiles}MPH (${data.current.winddirDegree})`;
    }
}