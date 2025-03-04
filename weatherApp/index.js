const apiKey = "42c31ccba6c5b3ebde0433e066f67436";

const cityNameInput = document.getElementById("cityNameInput");
const errorField = document.getElementById("error");
const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const weatherImage = document.getElementById("weatherimg");
const temp = document.getElementById("temperature");
const description = document.getElementById("weatherDes");
const weatherInfo = document.getElementById("weatherInfo");
const loader = document.getElementById("loader");
const locationIcon = document.getElementById('locationIcon');


submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
    weatherInfo.innerHTML = '';

  displayWeather();
//   
});

// Use geolocation API to get current location
locationIcon.addEventListener('click', () => {
    loader.style.display = "block";
    errorField.style.display = "none";
    weatherInfo.innerHTML = '';
    const success = async (position) => {
        try {
            const newPosition = parseGeo(position);
            console.log(newPosition);
            
            // Get weather data using the coordinates
            const weatherResponse = await getWeather(newPosition.lon, newPosition.lat);
            
            // Get image URL
            const weatherImageUrl = `https://openweathermap.org/img/wn/${weatherResponse.icon}@2x.png`;
            
            cityNameInput.value = weatherResponse.location;

            // Update weather info
            weatherInfo.innerHTML = `
                <h2 id="cityName">${weatherResponse.location}</h2>
                <img src=${weatherImageUrl} alt="Weather icon" width="100px" id="weatherimg">
                <p id="temperature">${weatherResponse.temp}℃</p>
                <p id="weatherDes">${weatherResponse.description}</p>
            `;
        } catch (error) {
            console.log(error);
            getError(error.message);
        } finally {
            loader.style.display = "none";
        }
    }

    const error = () => {
            getError("Could not access your location. Please check permissions.");
            loader.style.display = "none";

    }
    
    navigator.geolocation.getCurrentPosition(success, error
    );
});

async function getGeo() {
    try {
        const city = cityNameInput.value.trim();
    if (!city) {
      errorField.style.display = "block";
    }
    console.log(city);

    // Get Latitude and Longtitude
    const geoUrl = `
 http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    const geoResponse = await fetch(geoUrl);

    if (!geoResponse.ok) {
      throw new Error("Could not get details");
    } 
    const geoData = await geoResponse.json();

    if (!geoData[0]) {
      throw new Error("Enter a valid city");

    } 
    console.log(geoData);

    console.log(geoData[0].lon);
    console.log(geoData[0].lat);

    const lon = geoData[0].lon;
    const lat = geoData[0].lat;

    return {lon,lat}
    } catch (error) {
        getError(error.message)
    }
    

}

// Get current Weather forcast with API
async function getWeather(lon , lat) {
  try {

    // Get Weather details
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
        throw new Error("Bad response");
        
    }
    const data = await response.json();
    const newdata = getWeatherInfo(data);

    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.weather[0].description);

    console.log(data.weather[0].icon);

    return newdata;

  } catch (error) {
    console.log(error);

    getError(error.message);
  }
}

function getWeatherInfo(data) {
  const {
    name: location,
    main: { temp },
    weather: [{ description, icon }],
  } = data;

  return { location, temp, description, icon };
}

// Function to get error
function getError(error) {
  errorField.textContent = error;
}

async function displayWeather() { 
    try {
        loader.style.display = "block";
        
        //  Get the geo coordinates based on city input
        const geoData = await getGeo();
        
        // Then pass those coordinates to getWeather
        const weatherResponse = await getWeather(geoData.lon, geoData.lat);
        console.log(weatherResponse);
  
        // Get image URL
        const weatherImageUrl = `https://openweathermap.org/img/wn/${weatherResponse.icon}@2x.png`;
  
        // Update weather info
        weatherInfo.innerHTML = `
            <h2 id="cityName">${weatherResponse.location}</h2>
            <img src=${weatherImageUrl} alt="Weather icon" width="100px" id="weatherimg">
            <p id="temperature">${weatherResponse.temp}℃</p>
            <p id="weatherDes">${weatherResponse.description}</p>
        `;
        errorField.style.display = 'none';
    } catch (error) {
        console.log(error);
        getError(error.message);
    } finally {
        loader.style.display = "none";
    }
}


function parseGeo(data) {
    const {coords: {
        latitude: lat,
        longitude: lon
    }} = data;

    return {lon, lat}
}

