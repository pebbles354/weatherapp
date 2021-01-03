//Default weather app api key: a7d000bc83452f91d1c5f98b2327ab5a

//async function to pull the current Weather from openweathermap api
async function pullWeatherObject() {
  const weatherData = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=37.550201&lon=-121.980827&appid=a7d000bc83452f91d1c5f98b2327ab5a', {mode: 'cors'});
  const weatherDataParsed = await weatherData.json();
  // console.log(weatherDataParsed);
  return weatherDataParsed;
};

// converts unit from kelvin to farenheight
const kelvinConverter = function(temp) {
  return ((temp * (9/5)) - 459.67);
}

// weather Description that we can edit
const heatCategories = function() {
  return {
    hot: 90,
    warm: 70,
    neutral: 50,
    chilly: 30,
    freezing: -100,
  }
}();

// pull temperatureCat based on the temperature input
const temperatureCategory = function(temperature, weatherDescription) {
  //turn the temperature object into an array
  const temps = Object.entries(weatherDescription);

  // loop through temps to assign the key if the temperature is greater than the value
  for (let i=0; i<temps.length; i++) {
    if (temperature > temps[i][1]) {
      return tempCat = temps[i][0];
    }
  }
}

// takes the weather object and specifies if the day is snowy, rainy, cloudy, partly sunny, or sunny
const conditionCategory = function(weatherObject) {
  // minimum probability to mark a day as rainy/snowy
  let minimalProbabilityPrec = 0.3;

  // minimum probabilities to mark a day as cloudy vs partially cloudy
  let cloudyProbability = 0.7;
  let partlyProbability = 0.2;

  if (weatherObject.snowChance > minimalProbabilityPrec) {
    return 'snowy';
  } else if (weatherObject.rainChance > minimalProbabilityPrec) {
    return 'rainy';
  } else if (weatherObject.cloudCover > cloudyProbability) {
    return 'cloudy';
  } else if (weatherObject.cloudCover > partlyProbability) {
    return 'partly sunny'
  } else {
    return 'sunny'
  }
}

// capitalize first letter
const capitalize = function(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// take the two weather objects and reflect a description of what is happening today.
const weatherDescriptionText = function(weatherDescriptors, weatherObject) {
  const a = weatherDescriptors.conditionDescription
  const beginningText = `${capitalize(weatherDescriptors.dayTimeDescription)} day. ${capitalize(weatherDescriptors.nightTimeDescription)} night.`

  if (a === 'sunny') {
    return `${beginningText} Sunny.`
  } else if (a === 'partly sunny') {
    return `${beginningText} Partly Sunny (${weatherObject.cloudCover}% cloud cover).`
  } else if (a === 'cloudy') {
    return `${beginningText} Overcast (${weatherObject.cloudCover}% cloud cover).`
  } else if (a === 'rainy') {
    return `${beginningText} Likely rainy (${weatherObject.rainChance}% chance).`
  } else if (a === 'snowy') {
    return `${beginningText} Likely snowy (${weatherObject.snowChance}% chance).`
  }
}


const createWeatherObject = function(weatherDataParsed) {
  return {
    currentFeelsLike: kelvinConverter(weatherDataParsed.current.feels_like),
    dayFeelsLike: kelvinConverter(weatherDataParsed.daily[0].feels_like.day),
    nightFeelsLike: kelvinConverter(weatherDataParsed.daily[0].feels_like.night),
    currentActual: kelvinConverter(weatherDataParsed.current.temp),
    dayActual: kelvinConverter(weatherDataParsed.daily[0].temp.day),
    nightActual: kelvinConverter(weatherDataParsed.daily[0].temp.eve),
    rainChance: weatherDataParsed.daily[0].rain,
    snowChance: weatherDataParsed.daily[0].snow,
    cloudCover: weatherDataParsed.daily[0].clouds,
  }
}

const weatherDescriptors = function(weatherObj) {
  // specifies temperature is based on the "feels like" temp
  let dayTemp = weatherObj.dayFeelsLike;
  let nightTemp = weatherObj.nightFeelsLike;
  
  return {
    dayTimeDescription: temperatureCategory(dayTemp, heatCategories),
    nightTimeDescription: temperatureCategory(nightTemp, heatCategories),
    conditionDescription: conditionCategory(weatherObj),
  }
}



// final function to run things
const executeWeather = function() {

  pullWeatherObject().then(function(success) {
    const weatherObjectValue = createWeatherObject(success);
    const weatherDescriptorsValue = weatherDescriptors(weatherObjectValue);
    
    // Text value that needs to spit out
    const weatherDescriptionTextValue = weatherDescriptionText(weatherDescriptorsValue, weatherObjectValue);
    
    // TODO Need to add more code - have to build out section that spits out array with clothing items
    
  })
}

executeWeather();


// console.log(Geolocation.getCurrentPosition());

// var cityName = document.getElementById('city');
// console.log(cityName.value);


// weather pack: https://www.flaticon.com/packs/weather-76
