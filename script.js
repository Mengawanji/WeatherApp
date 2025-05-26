let weather = {
    "apiKey": "17af550c731838d8573c31e56b9e47c4", 
    fetchWeather: function (city) {
        fetch(
            " https://api.openweathermap.org/data/2.5/weather?q=" + city + "uk&APPID=1" + this.apiKey
        )
        .then((response)=> response.json())
        .then((data)=> console.log(data)); //this.displayWeather 
    },  

    displayWeather: function (data)  {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} =  data.wind;
        document.querySelector(".city").innerText = "Weather in " + name; 
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = "description";
        document.querySelector(".temp").innerText = temp + "&deg; C";
        document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "landscape')" ;
    },

    search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value);
            
    } 
};

document.querySelector(".search button").addEventListener("click",function() {
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function(e){
    if (e.key == "Enter") {
        weather.search();
    }

});

weather.fetchWeather("Denver");
