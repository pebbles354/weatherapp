//Default weather app api key: a7d000bc83452f91d1c5f98b2327ab5a

//api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}

//http://api.openweathermap.org/data/2.5/weather?q=London&APPID=a7d000bc83452f91d1c5f98b2327ab5a

// console.log(api.openweathermap.org/data/2.5/weather?q=Fremont&appid=dcd81950142697b8720809fb2af52a9e);


async function getWeather() {
    //https://api.openweathermap.org/data/2.5/onecall?lat=37.550201&lon=-121.980827&appid=a7d000bc83452f91d1c5f98b2327ab5a
    
    // const weatherData = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Redwood City, California&units=metric&APPID=a7d000bc83452f91d1c5f98b2327ab5a', {mode: 'cors'});
    const weatherData = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=37.550201&lon=-121.980827&appid=a7d000bc83452f91d1c5f98b2327ab5a', {mode: 'cors'});
    const weatherDataParsed = await weatherData.json();
    console.log(weatherDataParsed);
}

getWeather();

console.log(Geolocation.getCurrentPosition());

var cityName = document.getElementById('city');
console.log(cityName.value);


// weather pack: https://www.flaticon.com/packs/weather-76

{/* <svg width="883px" height="584px" viewBox="0 0 883 584" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stop-color="#F7FAFC" offset="0%"></stop>
          <stop stop-color="#DFEBF7" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path d="M835.746-2.683c58.652 62.415 62.704 127.241 12.158 194.48C772.084 292.655 402.786 394.5 283.349 387.5 203.725 382.833 108.61 449-2 586V-14L835.746-2.683z" fill="url(#a)" fill-rule="evenodd"></path>
    </svg> */}