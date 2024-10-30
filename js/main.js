document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "0e2efe55edbb0063b44bd09f05d18fa0";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weathericon");


    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{
            const data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            // Set weather icon based on data.weather[0].main
            if (data.weather[0].main === "Clouds") {
                weatherIcon.src = "./images/cloudy.png";
            } else if (data.weather[0].main === "Clear") {
                weatherIcon.src = "./images/sun.png";
            } else if (data.weather[0].main === "Rain") {
                weatherIcon.src = "./images/rain.png";
            } else if (data.weather[0].main === "Drizzle") {
                weatherIcon.src = "./images/drizzle.png";
            } else if (data.weather[0].main === "Mist") {
                weatherIcon.src = "./images/cloudy.png";
            }
            
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    
  
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
