const apiKey = "2f217ba9296fd58b6126f491e02a6a9c";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchInput = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weatherPng = document.querySelector("#mosam") 


async function checkWeather(city){
    const response = await fetch(url + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        var data = await response.json();

        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";
    
        // checking weather condition:
        if(data.weather[0].main == "Clouds"){
            weatherPng.src = "weather-app-img/images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherPng.src = "weather-app-img/images/clear.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherPng.src = "weather-app-img/images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherPng.src = "weather-app-img/images/mist.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherPng.src = "weather-app-img/images/rain.png"
        }
        else if(data.weather[0].main == "Snow"){
            weatherPng.src = "weather-app-img/images/snow.png"
        }
    
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display ="none"
        console.log(data);
    }
 
}

// checkWeather("gurugram")

searchbtn.addEventListener("click", function(){
    checkWeather(searchInput.value)
})
// checkWeather("gurugram")