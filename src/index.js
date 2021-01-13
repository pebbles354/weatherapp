import createWeatherObject from './createWeatherObject';
import generateWeatherDescriptors from './generateWeatherDescriptors';
import updateDom from './updateDom';
import modalFunctionality from './modalFunctionality';
import createOutfitArray from './createOutfitArray';
import searchByCity from './searchByCity'
import determineLocation from './determineLocation'


// final function to run things, 
// turned into an object so we can add as even
const finalObject = function() {
  const executeWeather = function(city) {
    createWeatherObject.pullWeatherObject(city).then(function(result) {

      // generate the weather information and the outfit
      const weatherDescriptor = generateWeatherDescriptors.weatherDescriptors(result);
      const todaysOutfit = createOutfitArray(weatherDescriptor);

      // update the page with the array generated
      updateDom.updateWeather(city, weatherDescriptor);
      updateDom.updateOutfit(todaysOutfit);
    })
  }
  return {executeWeather}
}();

// This function gives the modal functionality
modalFunctionality();
searchByCity(finalObject.executeWeather);

// Run the function to pull the current weather
finalObject.executeWeather(determineLocation.location);
