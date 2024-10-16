const apiKey = "0e2efe55edbb0063b44bd09f05d18fa0";
// const city = "bangalore";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weathericon");

async function checkWeather(city) {
    const response = await fetch(apiUrl+ city +  `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp") .innerHTML = Math.round(data.main.temp) + "°C" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h ";

}   

if(data.weather[0].main == "cloud"){
    weatherIcon.src = "images/clouds.png"
}
else if (data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clouds.png"
}
else if (data.weather[0].main == "Rain"){
    weatherIcon.src = "images/clouds.png"
}
else if (data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/clouds.png"
}
else if (data.weather[0].main == "Mist"){
    weatherIcon.src = "images/clouds.png"
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

