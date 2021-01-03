import createWeatherObject from './createWeatherObject';
import generateWeatherDescriptors from './generateWeatherDescriptors';


// final function to run things
const executeWeather = function() {
  createWeatherObject.pullWeatherObject().then(function(result) {
    const weatherDescriptor = generateWeatherDescriptors.weatherDescriptors(result);
    const weatherText = generateWeatherDescriptors.weatherDescriptionText(weatherDescriptor, result);
    console.log(weatherDescriptor);
    console.log(weatherText);
  })
}

// console.log(generateWeatherDescriptors);
// console.log(generateWeatherDescriptors.weatherDescriptors());

executeWeather();

