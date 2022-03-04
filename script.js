let weather = {
    apiKey: "3ccc646d7bb3b2b7b521e0eaff00145b",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        const { country } = data.sys;
        console.log(name, icon, description, temp, country);
        document.querySelector(".city").innerText = name + ", " + country;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".contents").innerText = description.toUpperCase();
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search-button")
.addEventListener("click", () => {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Berkeley");

// Selecting the toggle button
const toggle = document.getElementById("toggle");

// // event listener stops when the change theme button is clicked
toggle.addEventListener("click", () => {
   document.body.classList.toggle("dark");
   document.querySelector(".search-button").classList.toggle("dark");
});