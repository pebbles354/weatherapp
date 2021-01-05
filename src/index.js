import createWeatherObject from './createWeatherObject';
import generateWeatherDescriptors from './generateWeatherDescriptors';
import updateDom from './updateDom';


// final function to run things
const executeWeather = function() {
  createWeatherObject.pullWeatherObject().then(function(result) {
    const weatherDescriptor = generateWeatherDescriptors.weatherDescriptors(result);
    updateDom('Redwood City', weatherDescriptor);
  })
}

executeWeather();

// TODO: Create a clothing module to help us select what clothes to wear
// TODO: Design the html page 
// TODO: Responsive design 

// Bug: Scroll issue on page