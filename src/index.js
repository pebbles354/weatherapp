import createWeatherObject from './createWeatherObject';
import generateWeatherDescriptors from './generateWeatherDescriptors';
import updateDom from './updateDom';
import modalFunctionality from './modalFunctionality'


// final function to run things
const executeWeather = function() {
  createWeatherObject.pullWeatherObject().then(function(result) {
    const weatherDescriptor = generateWeatherDescriptors.weatherDescriptors(result);
    updateDom('Redwood City', weatherDescriptor);
  })
}

modalFunctionality();
executeWeather();

// TODO: Create a clothing module to help us select what clothes to wear
// TODO: Build out functionality for info and location bar
// TODO: Module to search for a new location
// TODO: Responsive design 

// TODO: Store current city + weather descriptor in storage, so we dont have to wait for api pull when we load page
