class Weather {
    constructor(city, state) {
        // this.apikey = '86966ada432d94387fd127a501d81ecc';
        this.apikey = 'abd0da3c2f7c431799c92737200506';
        this.city = city;
        this.state = state;
        this.days = 7;
        this.tp = 24;
        // this.country = country;
        // this.lat = lat;
        // this.lon = lon;
    }

    // fetch weather
    async getWeather(){
        // const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apikey}`);

        const response = await fetch(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${this.apikey}&q=${this.city},${this.state}&num_of_days=${this.days}&tp=${this.tp}&format=json`)

        const resData = await response.json();
        
        return{
            current: resData.data.current_condition[0],
            name: resData.data.request,
            prediction: resData.data.weather
        } 
        // console.log(typeof resData);
    }

    // Change weather location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}